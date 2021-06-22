package com.simplilearn.emplyeemanagment.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;

import com.simplilearn.emplyeemanagment.model.Employee;

@Controller
public class EmployeeConsumeController {

	@Autowired
	private RestTemplate restTemplate;

	@GetMapping("/emp/find")
	public void show() {

		//Employee e = restTemplate.getForObject("http://localhost:8080/find/8", Employee.class);

		//System.out.println(e.getName());

		String url = "http://localhost:8080/find/post/id";
		
		
		
		RestTemplate retRestTemplate = new RestTemplate();
		
		
		Map<String,Integer> map = new HashMap<String, Integer>();
		
		
		map.put("id", 6);
		
		
		
		
		Employee response = restTemplate.postForObject(url, map, Employee.class);
		
		System.out.println(response.getName());
		
		
		
		
		
	}

}
