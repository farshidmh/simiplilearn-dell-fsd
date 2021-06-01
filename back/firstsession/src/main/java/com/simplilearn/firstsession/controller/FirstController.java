package com.simplilearn.firstsession.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.simplilearn.firstsession.model.Book;
import com.simplilearn.firstsession.repo.BookRepository;

@Controller
public class FirstController {

	@Autowired
	private BookRepository brepo;

	/*
	@GetMapping("/get/{bookId}")
	public String handleViewBook(@PathVariable int bookId, Model model) {
		Optional<Book> b1 = brepo.findById(bookId);
		model.addAttribute("title", b1.get().getTitle());
		return "view";
	}

	*/
	
	@GetMapping("/get/{title}")
	public String handleViewBookByTitle(@PathVariable String title, Model model) {

		List<Book> books =  brepo.findByTitleLike("%"+title+"%");
		
		
		for(Book b : books) {
			
			System.out.println(b.getTitle());
			
			System.out.println(b.getAuthor());
			
			
		}
		
		
		
		
		
		
		return "view";
	}
	
	
	
	
	
	
	
	
	
	@GetMapping("/show/book")
	public String showNewBookForm(Model model) {
		return "show-new-book-form";
	}

	@GetMapping("/")
	public String handleFirstPage(Model model) {

		model.addAttribute("firstName", "John");

		return "home";

	}

}
