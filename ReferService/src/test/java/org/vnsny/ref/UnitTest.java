package org.vnsny.ref;

import static org.junit.jupiter.api.Assertions.*;

import java.io.IOException;
import java.nio.channels.FileChannel;
import java.nio.channels.FileLock;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;

import javax.sql.DataSource;

import org.junit.jupiter.api.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import com.zaxxer.hikari.HikariDataSource;

@PropertySource("classpath:application-test.properties")
class UnitTest {

	//@Test
	void test() {
		//ZoneId zonedId = ZoneId.of( "America/Montreal" );
		//LocalDate today = LocalDate.now( zonedId );
		
		LocalDateTime yesterday5Pm = LocalDateTime.of(LocalDate.now().minusDays(1), LocalTime.of(17, 0, 0));
		System.out.println("yesterday5pm: " + yesterday5Pm.toString());
		String submitTimeTxt = "2021-03-03 15:36:57";
			
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		LocalDateTime submitTime = LocalDateTime.parse(submitTimeTxt, formatter);
		if (submitTime.isBefore(yesterday5Pm)) {// remove the referrals before 5PM previous day
			System.out.println(submitTimeTxt + " is before 5pm yesterday");
		}
		
		submitTimeTxt = "2021-03-03 16:09:00";
		submitTime = LocalDateTime.parse(submitTimeTxt, formatter);
		if (submitTime.isBefore(yesterday5Pm)) {// remove the referrals before 5PM previous day
			System.out.println(submitTimeTxt + " is before 5pm yesterday");
		} else {
			System.out.println(submitTimeTxt + " is after 5pm yesterday");
		}
	}
		
	
	//@Test
	void testReplaceall() {
		String text = "{\\r\\n  \"patient\" : {\\r\\n    \"pat_first_name\" : \"J\",\\r\\n    \"pat_last_name\" : \"Smith\",\\r\\n    \"gener\" : \"M\",\\r\\n    \"pat_dob\" : \"10/10/1940\",\\r\\n    \"pat_phone\" : \"718-111-2222\",\\r\\n    \"street\" : \"55 main st\",\\r\\n    \"city\" : \"new york\",\\r\\n    \"state\" : \"NY\",\\r\\n    \"pat_zipcode\" : \"10001\",\\r\\n    \"pat_pri_insurance\" : \"\",\\r\\n    \"diagnosis\" : \"n/a\"\\r\\n  },\\r\\n  \"physician\" : {\\r\\n    \"phy_first_name\" : \"ken\",\\r\\n    \"phy_last_name\" : \"mah\",\\r\\n    \"phy_phone\" : \"718-777-7777\",\\r\\n    \"phy_email\" : \"kenneth.mah@vnsny.com\",\\r\\n    \"save_info\" : null\\r\\n  }\\r\\n}";
		System.out.println(text);
		String cleaned = text.replaceAll("\"|,|}|\\{", "");
		
		System.out.println(cleaned);
	}
	
	//@Test
	void testSplit() {
		String to = "kenneth_m@vnsny.org,kennmah@gmail.com; ken@vns.org, k1@vns.com";
		String toAddrs[] = to.split(",|;");
		System.out.println("length: " + toAddrs.length );
		for (String s: toAddrs) {
			System.out.println(s);
		}
	}
	
	@Test
	void testFileChannel() throws IOException {
		AbstractApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
		System.out.println(Arrays.toString(context.getBeanDefinitionNames()));
		HikariDataSource dataSource =  context.getBean("getDataSource", HikariDataSource.class);
		System.out.println("datasource url - " + dataSource.getJdbcUrl());
		System.out.println("datasource user name - " + dataSource.getUsername());
	    System.out.println("datasource password - " + dataSource.getPassword());
	    context.close();
	}
	

}
