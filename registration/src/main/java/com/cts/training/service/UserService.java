package com.cts.training.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.training.beans.Users;
import com.cts.training.repositroy.UserRepository;



@Service
public class UserService {
	
	Users user;
	@Autowired
	UserRepository repo;
	
	public List<Users> getAllUsers() {
		// TODO Auto-generated method stub
		return (List<Users>) repo.findAll();
	}


	public void addUser(Users user) {
		repo.save(user);
		
	}

	public Optional<Users> getUserDetailsById(int id) {
		
		return repo.findById(id);
	}



	
}
