package com.simplilearn.emplyeemanagment.repo;

import org.springframework.data.repository.CrudRepository;

import com.simplilearn.emplyeemanagment.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Integer> {

	
}
