package org.vnsny.ref.controller;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.vnsny.ref.service.Attachment;
import org.vnsny.ref.service.ReferEmailer;
import org.vnsny.ref.service.ReportService;

@Controller
public class EmailControl {
	private Logger log = LoggerFactory.getLogger(EmailControl.class);
	@Autowired
	private Environment env;
	
	@Value("${hospice.referral.email}")
	private String HSEmailAddress; // = "HospiceReferral@vnsny.org"
	
	@Value("${service.passcode}")
	private String passcode;
	
	@Autowired
	private ReferEmailer mailer;
	
	@Autowired
	private ReportService reportService;
	
	@RequestMapping("/ping")
	@ResponseBody
	public String ping() {
		String emailAddress = env.getProperty("hospice.referral.email");
		//System.out.println("email address from application.properties is:" + emailAddress);
		log.debug("debugging: email address from application.properties is:" + emailAddress);
		
		return "Referral E-mail service.";
	}
	
	@PostMapping("/postReferData")
	@ResponseBody
	public String postReferEmail(@RequestParam(value = "value") String json, @RequestParam(value = "accountId") String account, @RequestParam("file") MultipartFile[] files) {
		if (!passcode.equals(account)) {
			log.warn("Account ID is invalid.");
			return "Account is not correct";
		}
		try {		
			ObjectMapper objectMapper = new ObjectMapper();
			HashMap map = objectMapper.readValue(json, HashMap.class);		
			log.debug("json text is converted to map");
			
			
			String formatedText = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(map);
			formatedText = tidyUpJsonText(formatedText);
			Map<String, String> patient = (Map<String, String>)map.get("patient");
			Map<String, String> phy = (Map<String, String>)map.get("physician");
			
			Map<String, String> templateModel = new HashMap<>();
			templateModel.put("referName", phy.get("phy_first_name") + " " + phy.get("phy_last_name"));
			templateModel.put("patientName", patient.get("pat_first_name") + " " + patient.get("pat_last_name"));
			templateModel.put("referJsonData", formatedText.trim());
			
			//put in current date and time string in templatemodel
			LocalDate today = LocalDate.now();		
			LocalTime now = LocalTime.now();		
			DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
			templateModel.put("refdate", today.toString());
			templateModel.put("reftime", now.format(formatter));
			
			log.info("making call to send email to physician:" + phy.get("phy_email"));
			mailer.sendReceivedEmail(HSEmailAddress, phy.get("phy_email"), "VNSNY Hospice referral received", templateModel);
			
			List<Attachment> attachments = null;
			if (files != null) {
				attachments = new ArrayList<>();
				for (MultipartFile file : files) {
					Attachment attachment = new Attachment(file.getBytes(), file.getOriginalFilename(), file.getContentType());
					attachments.add(attachment);
				}
			}
			log.info("Sending referral email to: " + HSEmailAddress);
			//mailer.sendReferralDataEmail(HSEmailAddress, "kenneth.mah@vnsny.org", "VNSNY Hospice web portal referral notification", templateModel, attachments);
			mailer.sendReferralDataEmail(HSEmailAddress, HSEmailAddress, "VNSNY Hospice web portal referral notification", templateModel, attachments);
			
			log.debug("send emails sucessfully");
			
			// write the referral json content
			reportService.keepReferralData(json);
		} catch (Exception e) {
			log.error(e.getMessage(), e);
			e.printStackTrace();
		}
			
		return "done";		
	}
	
	@RequestMapping("/sendReferData")
	@ResponseBody
	public String sendReferEmail(@RequestParam(value = "value") String json, @RequestParam(value = "accountId") String account) {
		if (!passcode.equals(account)) {
			log.warn("Account ID is invalid.");
			return "Account is not correct";
		}
		try {		
			ObjectMapper objectMapper = new ObjectMapper();
			HashMap map = objectMapper.readValue(json, HashMap.class);		
			log.debug("json text is converted to map");
			
			
			String formatedText = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(map);
			formatedText = tidyUpJsonText(formatedText);
			Map<String, String> patient = (Map<String, String>)map.get("patient");
			Map<String, String> phy = (Map<String, String>)map.get("physician");
			
			Map<String, String> templateModel = new HashMap<>();
			templateModel.put("referName", phy.get("phy_first_name") + " " + phy.get("phy_last_name"));
			templateModel.put("patientName", patient.get("pat_first_name") + " " + patient.get("pat_last_name"));
			templateModel.put("referJsonData", formatedText.trim());
			
			//put in current date and time string in templatemodel
			LocalDate today = LocalDate.now();		
			LocalTime now = LocalTime.now();		
			DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
			templateModel.put("refdate", today.toString());
			templateModel.put("reftime", now.format(formatter));
			
			log.info("making call to send email to physician:" + phy.get("phy_email"));
			mailer.sendReceivedEmail(HSEmailAddress, phy.get("phy_email"), "VNSNY Hospice referral received", templateModel);
			
			log.info("Sending referral email to: " + HSEmailAddress);
			//mailer.sendReferralDataEmail(HSEmailAddress, "kenneth.mah@vnsny.org", "VNSNY Hospice web portal referral notification", templateModel);
			mailer.sendReferralDataEmail(HSEmailAddress, HSEmailAddress, "VNSNY Hospice web portal referral notification", templateModel, null);
			
			log.debug("send emails sucessfully");
			
			// write the referral json content
			reportService.keepReferralData(json);
		} catch (Exception e) {
			log.error(e.getMessage(), e);
			e.printStackTrace();
		}
		return json;
	}
	
	private String tidyUpJsonText(String text) {
		//remove quote ",{} from the text
		String cleaned = text.replaceAll("\"|,|}|\\{", "");
		return cleaned;
	}
}
