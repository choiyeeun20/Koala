package com.yeeun.web.member;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry;

import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements MemberService{
	private Map<String, Object> map;
	public MemberServiceImpl() {
		map = new HashMap<>();
	}
	@Override
	public int count() {
		return map.size();
	}


	@Override
	public Member login(Member member) {
		Member returnUser = null;
		if(map.containsKey(member.getUserid())) {
			Member m = detail(member.getUserid());
			if(member.getPasswd().equals(m.getPasswd())) {
				return m;
			}
		}
		return returnUser;
	}

	@Override
	public Member detail(String userid) {
		Member t = (Member)map.get(userid);
		return t;
	}

	@Override
	public boolean update(Member member) {
		map.replace(member.getUserid(), member);
		return true;
	}

	@Override
	public boolean remove(String userid) {
		map.remove(userid);
		return true;
	}
	@Override
	public void add(Member member) {
		map.put(member.getUserid(), member);
	}
	@Override
	public List<Member> list() {
		List<Member> list = new ArrayList<>();
		@SuppressWarnings("rawtypes")
		Set set = map.entrySet();
		@SuppressWarnings("rawtypes")
		Iterator it = set.iterator();
		while(it.hasNext()) {
			@SuppressWarnings("unchecked")
			Map.Entry<String, Member> e = (Entry<String,Member>) it.next();
			list.add(e.getValue());
		}
		for(int i=0; i< list.size(); i++) {
			System.out.println(list.get(i));
		}
		return list;
	}

}
