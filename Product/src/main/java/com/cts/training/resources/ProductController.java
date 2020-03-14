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
import com.cts.training.beans.Product;
import com.cts.training.service.ProductService;
@RestController
@CrossOrigin
public class ProductController {
	@Autowired
	ProductService service;

	@RequestMapping("/products")
	List<Product> getAllProducts() {
		return service.getAllProducts();
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/products")
	void addProduct(@RequestBody Product cart) {
		service.addProducts(cart);
	}
	@RequestMapping(method = RequestMethod.DELETE, value="/products/{id}")
	void deleteProduct(@PathVariable int id) {
		service.deleteProduct(id);
	}
	@RequestMapping("/products/cart/{id}")
	Optional<Product> getProductDetailsById(@PathVariable int id) {
		return service.getProductDetailsById(id);
	}
}