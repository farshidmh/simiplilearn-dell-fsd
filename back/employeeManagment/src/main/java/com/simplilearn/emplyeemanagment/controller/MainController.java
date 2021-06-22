package com.simplilearn.emplyeemanagment.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

	
	
	
	@GetMapping("/")
	public String loadMainPage(Model model) {
	
		return "index";
	}
	
	
	@GetMapping("/newe")
	public String loadNewPage(Model model) {
	
		return "new";
	}
	
	
	
	
}
