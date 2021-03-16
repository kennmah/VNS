package org.vnsny.ref.service;

import java.io.IOException;
import java.nio.channels.FileLock;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoField;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.locks.Lock;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import org.vnsny.ref.util.Utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import freemarker.template.Template;

@Component
public class ReportService {
	private Logger log = LoggerFactory.getLogger(ReportService.class);
	
	@Value("${report.file.path}")
	private String ReportDirectory; 
	
	@Value("${hospice.referral.email}")
	private String HSEmailAddress; 
	
	@Value("${report.receipient.email}")
	private String ReportEmailAddress; 
	
	@Value("${report.receipient.email.weekly}")
	private String WeeklyReportEmailAddress; 
	
	@Value("${report.receipient.email.monthly}")
	private String MonthlyReportEmailAddress; 
	
	
	private static final String ArchieveFolderName = "archieves";
	private static final String ReportFileName = "REFERRALS.TRACE";
	private static final String YESTERDAY_REPORT = "LAST";
	private static final String Deliminator = "#@#";
	
	private Path reportFile;
	private Path previousReportFile;
	private Path archieveFolder;
	
	private Path reportLck;
	
	@Autowired
	private ReferEmailer mailer;

	
	@PostConstruct
	public void init(){	  
		try {
			archieveFolder = Paths.get(ReportDirectory, ArchieveFolderName);
			if (Files.notExists(archieveFolder)) 
				Files.createDirectories(archieveFolder); // create directories upstream if not yet created, all in once

			reportFile = Paths.get(ReportDirectory, ReportFileName);
			previousReportFile = Paths.get(ReportDirectory, YESTERDAY_REPORT);
			reportLck = Paths.get(ReportDirectory, "Report.lck");
			if (Files.notExists(reportLck)) {
				reportLck = Files.createFile(reportLck); 
			}
		} catch (IOException e) {
			e.printStackTrace();
			log.error(e.getMessage(), e);
		}

	}
		
	
	public void keepReferralData(String referralText) {
		try {
			log.info("save referral to file");
			byte[] bytes = (referralText + Deliminator).getBytes(StandardCharsets.UTF_8);
//			Files.write(reportFile, referralText + Deliminator, StandardOpenOption.CREATE, StandardOpenOption.APPEND, StandardOpenOption.WRITE, StandardOpenOption.SYNC);
			Files.write(reportFile, bytes, StandardOpenOption.CREATE, StandardOpenOption.APPEND, StandardOpenOption.WRITE, StandardOpenOption.SYNC);
		} catch (IOException e) {			
			//e.printStackTrace();
			log.warn(e.getMessage(), e);
		}
		
	}
	
//	public String[] getReportText() throws IOException {
//		 //String content = Files.readString(reportFile);
//		 byte[] bytes = Files.readAllBytes(reportFile);
//		 String content = new String(bytes, StandardCharsets.UTF_8);
//		 return content.split(Deliminator);
//	}
//	
		
	@Scheduled(cron = "0 0 9 * * *")
	public void runDailyAmReport() throws IOException {
		FileLock lock = Utils.getLock(this.reportLck);
		if(lock == null) {
			log.info("AmReport has been working by another process. Stop here!");
			return;
		}
		
		log.info("Create daily AM report...");
		try {
			ArrayList<HashMap> list = new ArrayList<>();
			
			if (Files.exists(previousReportFile)) 
				convertFileToJson(previousReportFile, list);			
			
			if (Files.exists(reportFile)) 
				convertFileToJson(reportFile, list);
			
			log.info(list.size() + " referrals before apply filtering.");
			// filter out referrals before 17:00 the previous day, and left referral submission time > 17:00 the past day
			LocalDateTime yesterday5Pm = LocalDateTime.of(LocalDate.now().minusDays(1), LocalTime.of(17, 0, 0));
			//log.info(yesterday5Pm.toString());
			
			Iterator<HashMap> iterator = list.iterator();	
			while (iterator.hasNext()) {
				HashMap data = iterator.next();
				String submitTimeTxt = (String) data.get("submissionTime");
				
				DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
				LocalDateTime submitTime = LocalDateTime.parse(submitTimeTxt, formatter);
				if (submitTime.isBefore(yesterday5Pm)) {// remove the referrals before 5PM previous day
					log.debug(submitTimeTxt + " is before yesterday 5PM so it is removed");
					iterator.remove();
				}
			}
			
			log.info(list.size() + " referral after filtering");
			Map templateModel = new HashMap();
			templateModel.put("data", list);
			templateModel.put("refDate", LocalDate.now().toString());
			
			mailer.sendReportEmail(HSEmailAddress, ReportEmailAddress, "VNSNY Hospice daily referral report-AM", templateModel);
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			lock.release();			
		}
	}

	@Scheduled(cron = "0 0 17 * * *")
	public void runDailyPmReport() throws IOException {
		FileLock lock = Utils.getLock(this.reportLck);
		if(lock == null) {
			log.info("PmReport has been working by another process. Stop here!");
			return;
		}
		
		log.info("Create daily PM report...");
		try {
			ArrayList<HashMap> list = new ArrayList<>();
			if (Files.exists(reportFile)) { 
				convertFileToJson(reportFile, list);
				
				log.info(list.size() + " referrals before apply filtering.");
				
				//filter out morning referrals, and left referral submission time > 12:00
				// filter out referrals before 17:00 the previous day, and left referral submission time > 17:00 the past day
				LocalDateTime todayNoon = LocalDateTime.of(LocalDate.now(), LocalTime.of(12, 0, 0));
				
				Iterator<HashMap> iterator = list.iterator();	
				while (iterator.hasNext()) {
					HashMap data = iterator.next();
					String submitTimeTxt = (String) data.get("submissionTime");
					
					DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
					LocalDateTime submitTime = LocalDateTime.parse(submitTimeTxt, formatter);
					if (submitTime.isBefore(todayNoon)) // remove the referrals before 12PM today
						iterator.remove();
				}
				
				log.info(list.size() + " referral after filtering");
			}
			
			Map templateModel = new HashMap();
			templateModel.put("data", list);
			//templateModel.put("refDate", LocalDate.now().toString());
			
			mailer.sendReportEmail(HSEmailAddress, ReportEmailAddress, "VNSNY Hospice daily referral report-PM", templateModel);
		} catch (Exception e) {
			log.error(e.getMessage(), e);
		} finally {
			lock.release();			
		}
		
	}
	
	@Scheduled(cron = "0 0 9 ? * MON")
	public void runWeeklyReport() throws IOException {	
		FileLock lock = Utils.getLock(this.reportLck);		
		if(lock == null) {
			log.info("Weekly Report has been working by another process. Stop here!");
			return;
		}
		
		log.info("Create Weekly report...");
		String[] last = getLastWeek();
		ArrayList<HashMap> list = new ArrayList<>();
		
		
		ReportFileComparator c = new ReportFileComparator("txt", last[0], last[1]);		
		try {
			Files.list(this.archieveFolder).filter(p -> !p.toFile().isDirectory())
			.filter(p -> c.isSelected(p.getFileName().toString()))
			.forEach(p -> convertFileToJson(p, list));
			
			Map templateModel = new HashMap();
			templateModel.put("data", list);
			//templateModel.put("refDate", LocalDate.now().toString());
			
			log.info("sending weekly report");
			mailer.sendReportEmail(HSEmailAddress, WeeklyReportEmailAddress, "VNSNY Hospice weekly referral report", templateModel);			
		} catch (Exception e) {
			log.error("Error in reading weekly files", e);
		} finally {
			lock.release();
		}
	}

	@Scheduled(cron = "0 0 9 1 * ?")
	public void runMonthlyReport() throws IOException {
		log.info("Create Monthly report...");
		
		FileLock lock = Utils.getLock(this.reportLck);		
		if(lock == null) {
			log.info("Monthly Report has been working by another process. Stop here!");
			return;
		}
		
		String[] last = getLastMonth();
		ArrayList<HashMap> list = new ArrayList<>();		
		
		ReportFileComparator c = new ReportFileComparator("txt", last[0], last[1]);		
		try {
			Files.list(this.archieveFolder)
			.filter(p -> !p.toFile().isDirectory())
			.filter(p -> c.isSelected(p.getFileName().toString()))
			.forEach(p -> convertFileToJson(p, list));
			
			Map templateModel = new HashMap();
			templateModel.put("data", list);
			templateModel.put("refDate", LocalDate.now().toString());
			
			log.info("sending Monthly Report");
			mailer.sendReportEmail(HSEmailAddress, MonthlyReportEmailAddress, "VNSNY Hospice Monthly referral report", templateModel);			
		} catch (Exception e) {
			log.error("Error in reading weekly files", e);
		} finally {			
			lock.release();
		}
	}
	
	@Scheduled(cron = "0 0 0 * * *")
	public void archieveReportFile() {
		log.info("backing up referral files ...");
		
		try {
			if (Files.notExists(reportFile)) {// means no referrals created for the date
				log.info(ReportFileName +" isn't yet created");
				Files.delete(previousReportFile); // delete LAST file so not to create save report for more than 1 time
				return;
			}
				
			//rename active referral file to yesterday file for report
			Files.move(reportFile, previousReportFile, StandardCopyOption.REPLACE_EXISTING);
			
			//flush report file
			//Files.writeString(reportFile, "", StandardOpenOption.TRUNCATE_EXISTING, StandardOpenOption.WRITE, StandardOpenOption.SYNC);
			
			// archieve the active referral file 
			Files.copy(previousReportFile, Paths.get(ReportDirectory, ArchieveFolderName, getDateString() + ".txt"), StandardCopyOption.REPLACE_EXISTING);	
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			log.error(e.getMessage(), e);
		}
	}
	
	public void aquireLock(Path lock) {
		try {
			if (Files.notExists(lock)) {
				lock = Files.createFile(lock); 
			}
			
//			FileInputStream fi = new 
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	
	private String getDateString() {
		return LocalDateTime.now().minusHours(1).toLocalDate().toString();		
	}
	
	
	private String[] getLastMonth() {
		LocalDate firstDay = LocalDate.now().withDayOfMonth(1);		
		return new String[] {firstDay.minusMonths(1).toString(), firstDay.minusDays(1).toString()};
	}
	
	private String[] getLastWeek() {
		LocalDate thisMonday = LocalDate.now().with(ChronoField.DAY_OF_WEEK, 1);
		return new String[] {thisMonday.minusDays(7).toString(), thisMonday.minusDays(1).toString()};
	}
	
	private void convertFileToJson(Path file, List<HashMap> list) {
		try {
			ObjectMapper objectMapper = new ObjectMapper();
			//String content = Files.readString(previousReportFile); // this not working in java 1.8
			byte[] bytes = Files.readAllBytes(file);			
			String content = new String(bytes, StandardCharsets.UTF_8);
			String[] jsons = content.split(Deliminator);
			
	
			for (String json : jsons) {
				HashMap map = objectMapper.readValue(json, HashMap.class);
				list.add(map);
			}
		} catch (Exception e) {
			log.error("Converting JSON error", e);
		}		
	}
	
}
