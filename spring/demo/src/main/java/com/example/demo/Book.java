package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Book {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

  
    private String title;

   
    private String author;


	public Book(String title, String author) {
		super();
		this.title = title;
		this.author = author;
	}


	public Book() {
		super();
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getAuthor() {
		return author;
	}


	public void setAuthor(String author) {
		this.author = author;
	}
	

	
    
    
    
}
