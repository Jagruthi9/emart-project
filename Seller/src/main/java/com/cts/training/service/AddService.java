package com.cts.training.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.training.beans.AddProduct;

import com.cts.training.repository.AddRepository;


@Service
public class AddService {
	AddProduct product;
	@Autowired
	AddRepository repo;
	
	public List<AddProduct> getAllProducts() {
		// TODO Auto-generated method stub
		return (List<AddProduct>) repo.findAll();
	}


	public void addProduct(AddProduct product) {
		repo.save(product);
		
	}

	public Optional<AddProduct> getProductDetailsById(int id) {
		
		return repo.findById(id);
	}



	
}


