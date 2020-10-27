package com.ibm.odm;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Borrower {
	private Date dateOfBirth = new Date();
	private List<Account> accounts = new ArrayList<Account>();
	private String creditHistory;
	private String yearsEmployed;
	private int yearsAtCurrentAddress;
	private int yearsWithBank;
	private String jobType;
	private String sex;
	private int linesOfCredit;
	private int dependents;
	private String phoneNumber;
	private boolean citizen;
	private String housing;
	private String propertyOwnership;
	private String installmentPlans;
	private String role;

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public List<Account> getAccounts() {
		return accounts;
	}

	public void setAccounts(List<Account> accounts) {
		this.accounts = accounts;
	}

	public String getCreditHistory() {
		return creditHistory;
	}

	public void setCreditHistory(String creditHistory) {
		this.creditHistory = creditHistory;
	}

	public String getYearsEmployed() {
		return yearsEmployed;
	}

	public void setYearsEmployed(String yearsEmployed) {
		this.yearsEmployed = yearsEmployed;
	}

	public int getYearsAtCurrentAddress() {
		return yearsAtCurrentAddress;
	}

	public void setYearsAtCurrentAddress(int yearsAtCurrentAddress) {
		this.yearsAtCurrentAddress = yearsAtCurrentAddress;
	}

	public int getYearsWithBank() {
		return yearsWithBank;
	}

	public void setYearsWithBank(int yearsWithBank) {
		this.yearsWithBank = yearsWithBank;
	}

	public String getJobType() {
		return jobType;
	}

	public void setJobType(String jobType) {
		this.jobType = jobType;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public int getLinesOfCredit() {
		return linesOfCredit;
	}

	public void setLinesOfCredit(int linesOfCredit) {
		this.linesOfCredit = linesOfCredit;
	}

	public int getDependents() {
		return dependents;
	}

	public void setDependents(int dependents) {
		this.dependents = dependents;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public boolean isCitizen() {
		return citizen;
	}

	public void setCitizen(boolean citizen) {
		this.citizen = citizen;
	}

	public String getHousing() {
		return housing;
	}

	public void setHousing(String housing) {
		this.housing = housing;
	}

	public String getPropertyOwnership() {
		return propertyOwnership;
	}

	public void setPropertyOwnership(String propertyOwnership) {
		this.propertyOwnership = propertyOwnership;
	}

	public String getInstallmentPlans() {
		return installmentPlans;
	}

	public void setInstallmentPlans(String installmentPlans) {
		this.installmentPlans = installmentPlans;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

}
