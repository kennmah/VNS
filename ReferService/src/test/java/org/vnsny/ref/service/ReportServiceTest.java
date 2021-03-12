package org.vnsny.ref.service;

import static org.junit.jupiter.api.Assertions.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoField;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalUnit;
import java.util.Date;

import org.junit.jupiter.api.Test;

class ReportServiceTest {

	//@Test
	void testKeepReferralData() {
		String referralText = "{\"physician\":{\"phy_first_name\":\"Pat\",\"phy_last_name\":\"Detail\",\"phy_phone\":\"123-456-1234\",\"phy_email\":\"Dr.Me@vnsny.org\",\"save_info\":null},\"patient\":{\"pat_first_name\":\"Jack\",\"pat_last_name\":\"Patient\",\"gener\":\"M\",\"pat_dob\":\"01/02/1940\",\"pat_phone\":\"718-718-7118\",\"street\":\"1 peace st\",\"city\":\"Brooklyn\",\"state\":\"NY\",\"pat_zipcode\":\"11023\",\"pat_pri_insurance\":\"CVS \",\"diagnosis\":\"Lung disease\"}}";
				
		ReportService r = new ReportService();
		r.keepReferralData(referralText);
	}
	
	//@Test
	void testGetReports() throws IOException {
//		ReportService r = new ReportService();
//		String[] splits = r.getReportText();
//		
//		System.out.println(splits.length);
//		for(int i=0; i<splits.length; i++) {
//			System.out.println(i + ":");
//			System.out.println(splits[i]);
//		}
		
		//System.out.println(LocalDateTime.now().plusDays(3)toLocalDate());
		
		LocalDate today = LocalDate.now();
		System.out.println(today);
		today = today.plusDays(7);
		LocalDate lastMonth = today.minusMonths(1);
		System.out.println(lastMonth);
		
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-M-dd");
		LocalDate dec = LocalDate.of(2020, 10, 1);
		String text = dec.format(formatter);
		System.out.println(text);
		  //LocalDate parsedDate = LocalDate.parse(text, formatter);
	}
	
	@Test
	void getFiles() {
		String dir = "D:\\opt\\archieve";
		Path path = Paths.get(dir);
		System.out.println(path);
		System.out.println(path.getName(path.getNameCount()-1));
		String[] last = getLastMonth();//getLastWeek();
		ReportFileComparator c = new ReportFileComparator("pdf", last[0], last[1]);
		
		try {
			Files.list(path).filter(p -> !p.toFile().isDirectory())
			//.filter(p -> p.toString().endsWith(".pdf"))
			.filter(p -> c.isSelected(p.getFileName().toString()))
			.sorted()
			.forEach(p -> {
				System.out.println(p.toString());
				//p.getFileName() == p.getNameCount() - 1)  and print like "2021-02-05.pdf"
			});
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	//@Test
	String[] getLastMonth() {
		LocalDate today = LocalDate.of(2021, 2, 10);
		System.out.println("of date:" + today.toString());
		LocalDate adjusted = today.withDayOfMonth(1);
		//System.out.println("first of this month:" + adjusted);
		System.out.println("first day of last month:" + adjusted.minusMonths(1));
		System.out.println("last day of last month:" + adjusted.minusDays(1));
		
		return new String[] {adjusted.minusMonths(1).toString(), adjusted.minusDays(1).toString()};
	}
	
	//@Test
	String[] getLastWeek() {
		LocalDate day = LocalDate.of(2021, 2, 25);
		//System.out.println("what day is: " + day.getDayOfWeek());
		LocalDate thisMonday = day.with(ChronoField.DAY_OF_WEEK, 1);
		System.out.println(thisMonday);
		System.out.println("last monday:" + thisMonday.minusDays(7));
		System.out.println("last sunday:" + thisMonday.minusDays(1));
		
		
		return new String[] {thisMonday.minusDays(7).toString(), thisMonday.minusDays(1).toString()};
	}
	

}
