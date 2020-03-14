package com.cts.training.beans;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Payment {
	String name;
	String cardno;
	@Id
	int cvv;
	
	
	
	public Payment() {
		super();
	}
	
	public Payment(String name, String cardno, int cvv) {
		super();
		this.name = name;
		this.cardno = cardno;
		this.cvv = cvv;
		
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCardno() {
		return cardno;
	}
	public void setCardno(String cardno) {
		this.cardno = cardno;
	}
	public int getCvv() {
		return cvv;
	}
	public void setCvv(int cvv) {
		this.cvv = cvv;
	}

	
	

}
