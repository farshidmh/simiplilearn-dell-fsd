package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class SimpleController {
	
	
	@Value("${spring.application.name}")
    String appName;

	@Autowired
	private BookRepository bookRepository;
	
	@GetMapping("/{bookTitle}")
	public void create(@PathVariable String bookTitle) {
		
		
		Book book = new Book("War and Peac","A");
		
		
	
		

		
     //   return bookRepository.save(book);
    }
	
	
	
    @GetMapping("/")
    public String homePage(Model model) {
    	
    	System.out.println( bookRepository.findByauthor("A").get(0).getTitle()  );
    	System.out.println( bookRepository.findByauthor("A").get(1).getTitle()  );

    	
        model.addAttribute("appName", appName);
        return "home";
    }

}
