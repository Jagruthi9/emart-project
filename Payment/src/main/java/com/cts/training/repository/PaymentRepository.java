package com.cts.training.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.cts.training.beans.Payment;

public interface PaymentRepository extends CrudRepository<Payment, Integer>{
	Optional<Payment> findById(int cvv);

}
