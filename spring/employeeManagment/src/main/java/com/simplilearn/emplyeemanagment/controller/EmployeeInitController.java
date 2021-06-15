package com.simplilearn.emplyeemanagment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.simplilearn.emplyeemanagment.model.Employee;
import com.simplilearn.emplyeemanagment.repo.EmployeeRepository;

@Controller
public class EmployeeInitController {

	
	@Autowired
	private EmployeeRepository repository;
	
	@GetMapping("/init")
	public String initEmployee() {
		
		Employee e1 = new Employee("Tim");
		Employee e2 = new Employee("Diana");
		
		
		repository.save(e1);
		repository.save(e2);
		
		return "Done";
		
	}
	
	
}
