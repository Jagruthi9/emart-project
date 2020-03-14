package com.cts.training.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.training.beans.Contacts;
import com.cts.training.repository.ContactRepository;


@Service
public class ContactService {
	Contacts contact;
	@Autowired
	ContactRepository repo;
	
	public List<Contacts> getAllcontacts() {
		// TODO Auto-generated method stub
		return (List<Contacts>) repo.findAll();
	}


	public void addContact(Contacts contact ) {
		repo.save(contact);
		
	}

	public Optional<Contacts> getContactDetailsByEmail(String email) {
		
		return repo.findByemail(email);
	}



	
}



