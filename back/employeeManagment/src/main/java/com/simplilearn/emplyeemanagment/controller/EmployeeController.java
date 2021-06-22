package com.simplilearn.emplyeemanagment.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.emplyeemanagment.exception.EmployeeNotFoundException;
import com.simplilearn.emplyeemanagment.model.Employee;
import com.simplilearn.emplyeemanagment.repo.EmployeeRepository;

@RestController
public class EmployeeController {

	@Autowired
	private EmployeeRepository repository;

	@GetMapping("/all")
	public List<Employee> all() {

		return (List<Employee>) repository.findAll();

	}

	@GetMapping("/find/{id}")
	public Employee findOne(@PathVariable int id) {

		return repository.findById(id).orElseThrow(() -> new EmployeeNotFoundException(id));

	}

	@PostMapping("/find/post/id")
	public Employee findEmployeeById(@RequestBody int id) {
		return repository.findById(id).orElseThrow(() -> new EmployeeNotFoundException(id));

	}

	@PostMapping("/api/new")
	public Employee createNewEmployee(@RequestParam String name) {

		
		Employee e1 = new Employee(name);
		repository.save(e1);

		return e1;
	}

}
