package com.yeeun.web.user;

import lombok.Data;

@Data
public class User {
	private String name, userid, password, ssn, addr;
	@Override
	public String toString() {
		return String.format("%s,%s,%s,%s,%s", name,userid,password,ssn,addr);
		
	}
}
//