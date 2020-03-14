package com.cts.training.repository;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import com.cts.training.beans.Product;
public interface ProductRepository extends CrudRepository<Product, Integer>{
	Optional<Product> findById(int id);
}