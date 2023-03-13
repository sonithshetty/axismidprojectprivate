package com.axis.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Student")
public class Student {
	
	@Id
	private Long id;
//	@Id
	private Long school_id;
	private String name;
	private String emailId;
	private String password;
	private String std;
	private boolean feesPaid;
	private double feesTotal = 15000;
	private double fees;
	private double remainingFees;
	private String imageUrl;

	public Student() {
		super();
	}

	

	public Student(Long id, Long school_id, String name, String emailId, String password, String std, boolean feesPaid,
			double feesTotal, double fees, double remainingFees, String imageUrl) {
		super();
		this.id = id;
		this.school_id = school_id;
		this.name = name;
		this.emailId = emailId;
		this.password = password;
		this.std = std;
		this.feesPaid = feesPaid;
		this.feesTotal = feesTotal;
		this.fees = fees;
		this.remainingFees = remainingFees;
		this.imageUrl = imageUrl;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getSchool_id() {
		return school_id;
	}

	public void setSchool_id(Long school_id) {
		this.school_id = school_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getStd() {
		return std;
	}

	public void setStd(String std) {
		this.std = std;
	}

	public boolean isFeesPaid() {
		if(getRemainingFees() == 0.0) {
			return feesPaid=true;
		}else {
			return feesPaid=false;
		}
	}

	public void setFeesPaid(boolean feesPaid) {
		this.feesPaid = feesPaid;
	}

	public double getFeesTotal() {
		return feesTotal;
	}

	public void setFeesTotal(double feesTotal) {
		this.feesTotal = feesTotal;
	}

	public double getFees() {
		return fees;
	}

	public void setFees(double fees) {
		this.fees = fees;
	}

	public double getRemainingFees() {
		return remainingFees = feesTotal - fees;
	}

	public void setRemainingFees(double remainingFees) {
		this.remainingFees = remainingFees;
	}



	public String getImageUrl() {
		return imageUrl;
	}



	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}



	@Override
	public String toString() {
		return "Student [id=" + id + ", school_id=" + school_id + ", name=" + name + ", emailId=" + emailId
				+ ", password=" + password + ", std=" + std + ", feesPaid=" + feesPaid + ", feesTotal=" + feesTotal
				+ ", fees=" + fees + ", remainingFees=" + remainingFees + ", imageUrl=" + imageUrl + "]";
	}

	
	
}
