package com.simplilearn.firstsession.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.view.RedirectView;

import com.simplilearn.firstsession.model.Book;
import com.simplilearn.firstsession.repo.BookRepository;

@Controller
@RequestMapping("/create")
public class CreateController {
	
	
	@Autowired
	private BookRepository brepo;
	
	
	
	
	
	@RequestMapping("book")
	public RedirectView saveNewBookForm(
			@RequestParam("book_title") String title, 
			@RequestParam("book_author") String author
	) {
		
		System.out.println(title);
		System.out.println(author);
		
		 Book toBeCreated = new Book(title,author);
		 
		 brepo.save(toBeCreated);
		

		 return new RedirectView("/show/book");
		 
	}
	
	
	
	
	
	
	
	

}
