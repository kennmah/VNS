package org.vnsny.ref.service;

import javax.mail.internet.MimeMessage;

public class EmailEcrypt {
	
//	public static MimeMessage signMessage(MimeMessage message) throws Exception {
//		
//		Security.addProvider(new BouncyCastleProvider());
//
//		CertificateDetails certDetails = CertificateUtil.getCertificateDetails(SIGNING_JKS,SECRET_KEY);
//		
//		// Create the SMIMESignedGenerator
//		SMIMECapabilityVector capabilities = new SMIMECapabilityVector();
//		capabilities.addCapability(SMIMECapability.dES_EDE3_CBC);
//		capabilities.addCapability(SMIMECapability.rC2_CBC, 128);
//		capabilities.addCapability(SMIMECapability.dES_CBC);
//		capabilities.addCapability(SMIMECapability.aES256_CBC);
//		
//		ASN1EncodableVector attributes = new ASN1EncodableVector();
//		attributes.add(new SMIMECapabilitiesAttribute(capabilities));
//		
//		IssuerAndSerialNumber issAndSer = new IssuerAndSerialNumber(new X500Name(certDetails.getX509Certificate().getIssuerDN().getName()),
//				certDetails.getX509Certificate().getSerialNumber());
//		attributes.add(new SMIMEEncryptionKeyPreferenceAttribute(issAndSer));
//		
//		SMIMESignedGenerator signer = new SMIMESignedGenerator();
//		
//		signer.addSignerInfoGenerator(new JcaSimpleSignerInfoGeneratorBuilder()
//				.setProvider("BC")
//				.setSignedAttributeGenerator(new AttributeTable(attributes))
//				.build("SHA1withRSA", certDetails.getPrivateKey(), 
//						certDetails.getX509Certificate()));
//		
//		// Add the list of certs to the generator
//		List<X509Certificate> certList = new ArrayList<X509Certificate>();
//		certList.add(certDetails.getX509Certificate());
//		
//		JcaCertStore bcerts = new JcaCertStore(certList);
//		signer.addCertificates(bcerts);
//		
//		// Sign the message
//		MimeMultipart mm = signer.generate(message);
//
//		// Set the content of the signed message
//		message.setContent(mm, mm.getContentType());
//		message.saveChanges();
//		
//		return message;
//	}

}
