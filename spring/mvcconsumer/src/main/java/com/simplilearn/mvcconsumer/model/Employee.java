package com.simplilearn.mvcconsumer.model;

public class Employee {
	
	private String name;
	
	private String role;
	
	private boolean isAdmin=false;

	public Employee(String name, String role) {
		super();
		this.name = name;
		this.role = role;
	}

	
	
	public Employee(String name, String role, boolean isAdmin) {
		super();
		this.name = name;
		this.role = role;
		this.isAdmin = isAdmin;
	}



	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}



	public boolean isAdmin() {
		return isAdmin;
	}



	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}
	
	
	
	
	
	
	
	
	

}
