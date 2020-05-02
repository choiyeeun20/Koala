package com.yeeun.web;

import org.springframework.boot.SpringBootConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootConfiguration
@Controller
public class HomeController {
	@GetMapping("/") 
	public String hello() {
		return "index"; //뒤에 html 생략함
	}
	@GetMapping("/home") 
	public String home() {
		return "user";
	}
	@GetMapping("/admin") 
	public String admin() {
		return "admin";
}
}