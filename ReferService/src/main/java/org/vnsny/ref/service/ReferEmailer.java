package org.vnsny.ref.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;

import freemarker.template.Template;
import freemarker.template.TemplateException;

@Component
public class ReferEmailer {
	private Logger log = LoggerFactory.getLogger(ReferEmailer.class);

	@Autowired
    private JavaMailSender emailSender;
	
	@Autowired
	private FreeMarkerConfigurer freemarkerConfigurer;
	 
	@Value("classpath:static/thumbnail_vnsny.jpg")
    private Resource vnsnyImg;
	
	@Value("classpath:static/thumbnail_veterans.png")
	private Resource veteransImg;
	
	public void sendReceivedEmail(String from, String to, String subject, Map<String,String> templateModel)
	        throws IOException, TemplateException, MessagingException {
	        
	    Template thankYouTemplate = freemarkerConfigurer.createConfiguration().getTemplate("ThankYou.ftlh");
	    String htmlBody = FreeMarkerTemplateUtils.processTemplateIntoString(thankYouTemplate, templateModel);
	    log.info("send physician email to: " + to);
	    sendHtmlMessage(from, to, subject, htmlBody);
	}
 
	public void sendReferralDataEmail(String from, String to, String subject, Map<String, String> templateModel, List<Attachment> attachment)
	        throws IOException, TemplateException, MessagingException {
	    Template dataTemplate = freemarkerConfigurer.createConfiguration().getTemplate("referData.ftlh");	    
	    String htmlBody = FreeMarkerTemplateUtils.processTemplateIntoString(dataTemplate, templateModel);
	    log.info("send referral data to: " + to);
	    sendHtmlMessage(from, to, subject, htmlBody, attachment);
	}
	
	public void sendReportEmail(String from, String to, String subject, Map templateModel)
	        throws IOException, TemplateException, MessagingException {
	    Template dataTemplate = freemarkerConfigurer.createConfiguration().getTemplate("summaryReport.ftlh");	    
	    String htmlBody = FreeMarkerTemplateUtils.processTemplateIntoString(dataTemplate, templateModel);
	    
	    //Files.writeString(Paths.get("/opt/appsData/ReferService/referrals", "report1.html"), htmlBody, StandardOpenOption.CREATE, StandardOpenOption.WRITE, StandardOpenOption.SYNC);
	    log.info("send report to: " + to);
	    sendHtmlMessage(from, to, subject, htmlBody);	    
	}
	
    public void sendSimpleMessage(
      String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage(); 
        message.setFrom("kenneth.mah@vnsny.org");
        message.setTo(to); 
        message.setSubject(subject); 
        message.setText(text);
        emailSender.send(message);
        
        log.info("send email to: " + to + " : " + ", subject: " + subject + "Details:\n" + text);

    }   
    
    private void sendHtmlMessage(String from, String to, String subject, String htmlBody) throws MessagingException {
    	//String toAddrs[] = to.split(",|;");
    	sendHtmlMessage(from, to, subject, htmlBody, null);
    }
    
//    private void sendHtmlMessage(String from, String to, String subject, String htmlBody, Attachment attachment) throws MessagingException {
//    	String toAddrs[] = to.split(",|;");
//    	sendHtmlMessage(from, toAddrs, subject, htmlBody, attachment);
//    }
    
//    private void sendHtmlMessage(String from, String[] to, String subject, String htmlBody, Attachment attachment) throws MessagingException {
//        MimeMessage message = emailSender.createMimeMessage();
//        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
//        helper.setFrom(from);
//        helper.setTo(to);        
//        //helper.addTo();
//        helper.addBcc("kenneth.mah@vnsny.org");
//        helper.setSubject(subject);
//        helper.setText(htmlBody, true);
//        
//        helper.addInline("vnsnyThumbNail", vnsnyImg);        
//        helper.addInline("veteransThumbNail", veteransImg);
//        if (attachment != null)
//        	helper.addAttachment(attachment.getName(), attachment.getInput(), attachment.getContentType());
//        emailSender.send(message);
//     
//    }
    
    private void sendHtmlMessage(String from, String to, String subject, String htmlBody, List<Attachment> attachments) throws MessagingException {
        MimeMessage message = emailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
        helper.setFrom(from);
        
        String toAddrs[] = to.split(",|;");
        helper.setTo(toAddrs);
        //helper.addTo();
        helper.addBcc("kenneth.mah@vnsny.org");
        helper.setSubject(subject);
        helper.setText(htmlBody, true);
        
        helper.addInline("vnsnyThumbNail", vnsnyImg);        
        helper.addInline("veteransThumbNail", veteransImg);
        if (attachments != null)
        	for (Attachment attachment : attachments)
        		helper.addAttachment(attachment.getName(), attachment.getInput(), attachment.getContentType());
        emailSender.send(message);
     
    }
}
