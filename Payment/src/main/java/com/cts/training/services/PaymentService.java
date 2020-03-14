package com.cts.training.services;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.cts.training.beans.Payment;
import com.cts.training.repository.PaymentRepository;



@Service
public class PaymentService {
	
	Payment payment;
	@Autowired
	PaymentRepository repo;
	
	public List<Payment> getAllTransactions() {
		// TODO Auto-generated method stub
		return (List<Payment>) repo.findAll();
	}


	public void addPayment(Payment payment) {
		repo.save(payment);
		
	}

	public Optional<Payment> getUserDetailsById(int cvv) {
		
		return repo.findById(cvv);
	}



	
}
