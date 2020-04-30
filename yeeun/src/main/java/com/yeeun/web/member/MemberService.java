package com.yeeun.web.member;

import java.util.List;

public interface MemberService {
	public void add(Member member);

	public int count();

	public Member login(Member member);

	public Member detail(String userid);

	public boolean update(Member member);

	public boolean remove(String userid);

	public List<Member> list();

	
}
