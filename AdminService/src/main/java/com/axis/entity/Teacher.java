package com.axis.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Teacher")
public class Teacher {
	
	@Id
	private Long id;
//	@Id
	private Long school_id;
	private String firstName;
	private String lastName;
	private String emailId;
	private String password;
	private double salaryEarned;
	private boolean salaryPaid;
	private double remainingSalary;
	private double totalSalary = 30000;
	private String imageUrl;
	
	public Teacher() {
		super();
	}

	

	public Teacher(Long id, Long school_id, String firstName, String lastName, String emailId, String password,
			double salaryEarned, boolean salaryPaid, double remainingSalary, double totalSalary, String imageUrl) {
		super();
		this.id = id;
		this.school_id = school_id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.password = password;
		this.salaryEarned = salaryEarned;
		this.salaryPaid = salaryPaid;
		this.remainingSalary = remainingSalary;
		this.totalSalary = totalSalary;
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

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
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

	public double getSalaryEarned() {
		return salaryEarned;
	}

	public void setSalaryEarned(double salaryEarned) {
		this.salaryEarned = salaryEarned;
	}

	public boolean isSalaryPaid() {
		if(getRemainingSalary() == 0.0) {
			return salaryPaid=true;
		}else {
			return salaryPaid=false;
		}
	}

	public void setSalaryPaid(boolean salaryPaid) {
		this.salaryPaid = salaryPaid;
	}

	public double getRemainingSalary() {
		return remainingSalary = totalSalary - salaryEarned;
	}

	public void setRemainingSalary(double remainingSalary) {
		this.remainingSalary = remainingSalary;
	}

	public double getTotalSalary() {
		return totalSalary;
	}

	public void setTotalSalary(double totalSalary) {
		this.totalSalary = totalSalary;
	}
	
	

	public String getImageUrl() {
		return imageUrl;
	}



	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}



	@Override
	public String toString() {
		return "Teacher [id=" + id + ", school_id=" + school_id + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", emailId=" + emailId + ", password=" + password + ", salaryEarned=" + salaryEarned + ", salaryPaid="
				+ salaryPaid + ", remainingSalary=" + remainingSalary + ", totalSalary=" + totalSalary + ", imageUrl="
				+ imageUrl + "]";
	}



	
	
}
