package com.cts.training.resources;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.training.beans.Payment;
import com.cts.training.services.PaymentService;


@RestController
@CrossOrigin
public class PaymentController {
	@Autowired
	PaymentService service;

	@RequestMapping("/pay")
	List<Payment> getAllUsers() {
		return service.getAllTransactions();
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/pay")
	void addPayment(@RequestBody Payment payment) {
		service.addPayment(payment);
	}
	
	@RequestMapping("/users/payment/{cvv}")
	Optional<Payment> getUserDetailsById(@PathVariable int cvv) {
		return service.getUserDetailsById(cvv);
	}
}
	