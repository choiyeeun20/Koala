package com.yeeun.web.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yeeun.web.util.Messenger;

@Service
public class UserServiceImpl implements UserService{
	@Autowired UserDao userDao;
	
	@Override
	public Messenger register(User user) {
		return userDao.insert(user);
	}

	@Override
	public List<User> findAll() {
		return userDao.selectAll();
	}
	
	@Override
	public User findOne(String userid) {
		return userDao.selectOne(userid);
	}


	@Override
	public void modify(User user) {
		userDao.update(user);
	}

	@Override
	public void remove(User user) {
		userDao.delete(user);
	}
}
