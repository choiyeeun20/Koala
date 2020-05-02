package com.yeeun.web.admin;

import java.util.List;

import org.springframework.stereotype.Component;
@Component //AdminDaoImpl에 Repository가있어서 interface의 타입정리를 위해서 컴포넌트를 추가해줌

public interface AdminDao {

	void insert(Admin admin);

	List<Admin> selectAll();

	Admin selectOne(String employNumebr);

	void update(Admin admin);

	void delete(Admin admin);

}
