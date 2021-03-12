package org.vnsny.ref.service;

import java.util.Base64;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamSource;

public class Attachment {	
	private InputStreamSource input;
	private String name;
	private String contentType;

	public Attachment(String byteText, String fileName, String contentType) {		 
		 //String base64String = Base64.encodeBase64String(bytes);
		// byte[] backToBytes = Base64.decodeBase64(byteText);
	}
	
	public Attachment(byte[] bytes, String fileName, String contentType) {
		this.input = new ByteArrayResource(bytes);
		this.name = fileName;
		this.contentType = contentType;
	}
	
	public InputStreamSource getInput() {
		return this.input;
	}
	
	public String getName() {
		return this.name;
	}
	
	public String getContentType() {
		return this.contentType;
	}
}