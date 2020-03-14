package com.cts.training.service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


import com.cts.training.beans.Product;
import com.cts.training.repository.CartRepository;


@Service
public class CartService {
	
	Product cart;
	@Autowired
	CartRepository repo;
	
	public List<Product> getAllProducts() {
		// TODO Auto-generated method stub
		return (List<Product>) repo.findAll();
	}

	public Optional<Product> getProductDetailsById(int id) {
		
		return repo.findById(id);
	}
	public void deleteProduct(int id) {
		repo.deleteById(id);
	}
	
	    
	
}
