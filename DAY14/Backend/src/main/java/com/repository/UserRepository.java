package com.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.User;

public interface UserRepository  extends JpaRepository<User,Integer>{
	
	List<Optional<User>> findByEmail(String email);
	
}
