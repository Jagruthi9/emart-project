package com.cts.training.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.cts.training.beans.AddProduct;



public interface AddRepository extends CrudRepository<AddProduct, String>{

	Optional<AddProduct> findById(int id);

}