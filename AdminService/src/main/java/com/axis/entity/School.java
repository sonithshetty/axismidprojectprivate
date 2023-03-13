package com.axis.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "School")
public class School {
	
	@Id
	private Long school_id;
	private String emailId;
	private String password;
	private double totalMoneyEarned;
	private double totalMoneySpent;
	private String schoolName;
	private String schoolAddr;
	private double totalFunds;
	

	public School() {
		super();
	}
	public School(Long school_id, String emailId, String password, double totalMoneyEarned, double totalMoneySpent,
			String schoolName, String schoolAddr, double totalFunds) {
		super();
		this.school_id = school_id;
		this.emailId = emailId;
		this.password = password;
		this.totalMoneyEarned = totalMoneyEarned;
		this.totalMoneySpent = totalMoneySpent;
		this.schoolName = schoolName;
		this.schoolAddr = schoolAddr;
		this.totalFunds = totalFunds;
	}
	public Long getSchool_id() {
		return school_id;
	}
	public void setSchool_id(Long school_id) {
		this.school_id = school_id;
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
	public double getTotalMoneyEarned() {
		return totalMoneyEarned;
	}
	public void setTotalMoneyEarned(double totalMoneyEarned) {
		this.totalMoneyEarned = totalMoneyEarned;
	}
	public double getTotalMoneySpent() {
		return totalMoneySpent;
	}
	public void setTotalMoneySpent(double totalMoneySpent) {
		this.totalMoneySpent = totalMoneySpent;
	}
	public String getSchoolName() {
		return schoolName;
	}
	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}
	public String getSchoolAddr() {
		return schoolAddr;
	}
	public void setSchoolAddr(String schoolAddr) {
		this.schoolAddr = schoolAddr;
	}
	public double getTotalFunds() {
		return totalFunds = totalMoneyEarned-totalMoneySpent;
	}
	public void setTotalFunds(double totalFunds) {
		this.totalFunds = totalFunds;
	}
	@Override
	public String toString() {
		return "School [school_id=" + school_id + ", emailId=" + emailId + ", password=" + password
				+ ", totalMoneyEarned=" + totalMoneyEarned + ", totalMoneySpent=" + totalMoneySpent + ", schoolName="
				+ schoolName + ", schoolAddr=" + schoolAddr + ", totalFunds=" + totalFunds + "]";
	}
	
	
}
