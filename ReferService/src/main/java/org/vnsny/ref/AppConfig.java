package org.vnsny.ref;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.apache.catalina.filters.HttpHeaderSecurityFilter;

import javax.sql.DataSource;

import org.apache.catalina.filters.CorsFilter;

@Configuration
public class AppConfig {	  
	@Value("jdbc:sqlserver://${HCHB.db.host}:1433;databaseName=CHHA")
	private String url;
	@Value("${HCHB.db.username}")
	private String userName;
	@Value("${HCHB.db.password}")
	private String pwd;
	
	@Bean
	public FilterRegistrationBean<HttpHeaderSecurityFilter> headerSecurityFilterRegistrationBean() {
		FilterRegistrationBean<HttpHeaderSecurityFilter> registrationBean = new FilterRegistrationBean<>();
		
		HttpHeaderSecurityFilter filter = new HttpHeaderSecurityFilter();

		registrationBean.setFilter(filter);
		registrationBean.addUrlPatterns("/*");
		registrationBean.addInitParameter("hstsEnabled", "true");
		registrationBean.addInitParameter("hstsMaxAgeSeconds", "2592000");
		registrationBean.addInitParameter("hstsIncludeSubDomains", "true");
		registrationBean.addInitParameter("antiClickJackingEnabled", "false");		
		registrationBean.addInitParameter("blockContentTypeSniffingEnabled", "true");
		registrationBean.addInitParameter("xssProtectionEnabled", "true");
		
		return registrationBean;
	}
	
	@Bean
	public FilterRegistrationBean<CorsFilter> loggingFilter(){
	    FilterRegistrationBean<CorsFilter> registrationBean = new FilterRegistrationBean<>();
	        
	    registrationBean.setFilter(new CorsFilter());
	    registrationBean.addUrlPatterns("/*");
	    registrationBean.addInitParameter("cors.allowed.origins", "*");
	    registrationBean.addInitParameter("cors.exposed.headers", "Access-Control-Allow-Origin,Access-Control-Allow-Credentials");
	    
	    return registrationBean;    
	}
	
	@Bean
    public DataSource getDataSource() {
        DataSourceBuilder dataSourceBuilder = DataSourceBuilder.create();
        dataSourceBuilder.driverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        dataSourceBuilder.url(this.url);
        dataSourceBuilder.username(this.userName);
        dataSourceBuilder.password(this.pwd);
        return dataSourceBuilder.build();
    }
	
}