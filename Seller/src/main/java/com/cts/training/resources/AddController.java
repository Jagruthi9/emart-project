package com.cts.training.resources;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.training.beans.AddProduct;
import com.cts.training.service.AddService;



@RestController
@CrossOrigin
@RequestMapping("/product")
public class AddController {
	@Autowired
	AddService service;

	@RequestMapping("/product")
	List<AddProduct> getAllProducts() {
		return service.getAllProducts();
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/products")
	void addProduct(@RequestBody AddProduct product) {
		service.addProduct(product);
	}
	
	@RequestMapping("/products/{id}")
	Optional<AddProduct> getProductDetailsById(@PathVariable int id) {
		return service.getProductDetailsById(id);
	}
	

	

}
