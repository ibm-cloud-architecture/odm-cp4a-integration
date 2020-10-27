package com.ibm.odm;

public class Loan {
	private int duration;
	private String loanPurpose;
	private int loanAmount;
	private int installmentPercent;
	private Borrower borrower;
	private Borrower coBorrower;

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public String getLoanPurpose() {
		return loanPurpose;
	}

	public void setLoanPurpose(String loanPurpose) {
		this.loanPurpose = loanPurpose;
	}

	public int getLoanAmount() {
		return loanAmount;
	}

	public void setLoanAmount(int loanAmount) {
		this.loanAmount = loanAmount;
	}

	public int getInstallmentPercent() {
		return installmentPercent;
	}

	public void setInstallmentPercent(int installmentPercent) {
		this.installmentPercent = installmentPercent;
	}

	public Borrower getBorrower() {
		return borrower;
	}

	public void setBorrower(Borrower borrower) {
		this.borrower = borrower;
	}

	public Borrower getCoBorrower() {
		return coBorrower;
	}

	public void setCoBorrower(Borrower coBorrower) {
		this.coBorrower = coBorrower;
	}

}
