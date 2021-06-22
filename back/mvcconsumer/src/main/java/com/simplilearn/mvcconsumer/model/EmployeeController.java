package com.simplilearn.mvcconsumer.model;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {
	
	
	@GetMapping("/show")
	public Employee showEmployees() {
		
		
		Employee e1 = new Employee("John","ADMIN",true);
		
		return e1;
		
		
	}

}
