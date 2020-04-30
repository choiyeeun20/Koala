package com.yeeun.web.admin;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Admin {
	private String  employNumber, passwd ,name , 
	position, profile, email, phoneNumber, 
	registerDate;
	
	@Override
	public String toString() {
		return String.format("%s,%s,%s,%s,%s,%s,%s,%s", 
				employNumber,passwd,name,position,profile,email,phoneNumber,registerDate);
	}
	//
}