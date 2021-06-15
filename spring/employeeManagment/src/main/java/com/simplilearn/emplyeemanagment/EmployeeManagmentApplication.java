package com.simplilearn.emplyeemanagment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class EmployeeManagmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeManagmentApplication.class, args);
	}

	@Bean
	public RestTemplate restTemplate( RestTemplateBuilder builder ) {				
		return builder.build();	
	}
	
}
