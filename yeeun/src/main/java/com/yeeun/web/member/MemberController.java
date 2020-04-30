package com.yeeun.web.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yeeun.web.util.Messenger;

@RestController
@RequestMapping("/member")
public class MemberController {
	@Autowired MemberService memberService;
	@PostMapping("/join")
	public Messenger join(@RequestBody Member member) {
		System.out.println("가입된 정보" + member);
		int count = memberService.count();
		memberService.add(member);
		return (memberService.count()== count+1)? Messenger.SUCCESS:Messenger.FAIL;
	}
	
	@PostMapping("/login")
	public Map<String,Object> login(@RequestBody Member member){
		System.out.println("로그인된 정보:"+ member);
		Map<String, Object> returnMap = new HashMap<>();
		Member loginedMember = memberService.login(member);
		if(loginedMember != null) {
			returnMap.put("user", loginedMember);
			returnMap.put("messenger", Messenger.SUCCESS);
		}else {
			returnMap.put("messenger", Messenger.FAIL);
		}
		return returnMap;
	}
	@GetMapping("/detail{userid}")
	public Member detail(@PathVariable String userid) {
		return memberService.detail(userid);
	}
	@PutMapping("/update")
	public Messenger update(@RequestBody Member member) {
		return (memberService.update(member))?Messenger.SUCCESS: Messenger.FAIL;
	}
	@DeleteMapping("/remove{userid}")
	public Messenger remove(@PathVariable String userid) {
		return  (memberService.remove(userid)) ? Messenger.SUCCESS: Messenger.FAIL;
		
	}
	@GetMapping("/list")
	public List<Member> list(){
		return memberService.list();
	}
}
