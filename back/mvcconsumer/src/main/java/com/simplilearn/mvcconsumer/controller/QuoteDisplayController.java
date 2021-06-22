package com.simplilearn.mvcconsumer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;

import com.simplilearn.mvcconsumer.model.ExampleB;
import com.simplilearn.mvcconsumer.model.Quote;

@Controller
public class QuoteDisplayController {

	
	@Autowired
	private RestTemplate restTemplate;
	
	
	@GetMapping("/")
	public void showQuote() {
	
		
		
		
		
		
		
		
		
	}
	
}
