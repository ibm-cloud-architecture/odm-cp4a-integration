package com.ibm.odm;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.Hashtable;
import java.util.Random;

public class SimulationGenerator {

	static private Hashtable<String, String> ol;
	static Random random = new Random();

	private static void parseFeatures(String line) {
		String[] features = line.split(",");
		ol = new Hashtable<String, String>();

		String CheckingStatus = features[0];
		if (!CheckingStatus.equals("no_checking")) {
			ol.put("CheckingStatus", CheckingStatus);
		}

		String LoanDuration = features[1];
		ol.put("LoanDuration", LoanDuration);

		String CreditHistory = features[2];
		ol.put("CreditHistory", CreditHistory);

		String LoanPurpose = features[3];
		ol.put("LoanPurpose", LoanPurpose);

		String LoanAmount = features[4];
		ol.put("LoanAmount", LoanAmount);

		String ExistingSavings = features[5];
		if (!ExistingSavings.equals("unknown")) {
			ol.put("ExistingSavings", ExistingSavings);
		}

		String EmploymentDuration = features[6];
		ol.put("EmploymentDuration", EmploymentDuration);

		String InstallmentPercent = features[7];
		ol.put("InstallmentPercent", InstallmentPercent);

		String Sex = features[8];
		ol.put("Sex", Sex);

		String OthersOnLoan = features[9];
		if (!OthersOnLoan.equals("none")) {
			if (OthersOnLoan.equals("co-applicant")) {
				ol.put("OthersOnLoan", "co-applicant");
			} else {
				ol.put("OthersOnLoan", "guarantor");
			}
		}

		String CurrentResidenceDuration = features[10];
		ol.put("CurrentResidenceDuration", CurrentResidenceDuration);

		String OwnsProperty = features[11];
		ol.put("OwnsProperty", OwnsProperty);

		String Age = features[12];
		ol.put("Age", Age);

		String InstallmentPlans = features[13];
		ol.put("InstallmentPlans", InstallmentPlans);

		String Housing = features[14];
		ol.put("Housing", Housing);

		String ExistingCreditsCount = features[15];
		ol.put("ExistingCreditsCount", ExistingCreditsCount);

		String Job = features[16];
		ol.put("Job", Job);

		String Dependents = features[17];
		ol.put("Dependents", Dependents);

		String Telephone = features[18];
		if (Telephone.equals("yes")) {
			ol.put("Telephone", "(123)456-7890");
		} else {
			ol.put("Telephone", "");
		}

		String ForeignWorker = features[19];
		ol.put("ForeignWorker", ForeignWorker.equals("yes") ? "false" : "true");

	}

	@SuppressWarnings("unused")
	private static void generateSimulationScenarios(String filename, String borrowersFilename, String scenariosFilename)
			throws Exception {
		BufferedReader is = new BufferedReader(new FileReader(filename));
		BufferedWriter bos = new BufferedWriter(new FileWriter(borrowersFilename));
		BufferedWriter sos = new BufferedWriter(new FileWriter(scenariosFilename));

		for (int i = 0; i <= 1000; i++) {

			String line = is.readLine();
			// Skip column headers
			if (i == 0)
				continue;

			parseFeatures(line);

			String scenario = "";
			scenario += "Scenario " + i + ",";
			scenario += ",";
			scenario += "Borrower " + i + ",";
			scenario += getField("OthersOnLoan") + ",";
			scenario += getField("LoanDuration") + ",";
			scenario += getField("InstallmentPercent") + ",";
			scenario += getField("LoanAmount") + ",";
			scenario += getField("LoanPurpose");
			sos.write(scenario);
			sos.newLine();

			String borrower = "";
			borrower += "Borrower " + i + ",";
			borrower += getFirstAccountCell() + ","; // + ",";
			borrower += getField("ForeignWorker") + ",";
			borrower += getField("CreditHistory") + ",";

			int year = 2020 - Integer.parseInt(getField("Age"));
			String dob = "9/21/" + year;

			borrower += dob + ",";
			borrower += getField("Dependents") + ",";
			borrower += getField("Housing") + ",";
			borrower += getField("InstallmentPlans") + ",";
			borrower += getField("Job") + ",";
			borrower += getField("ExistingCreditsCount") + ",";
			borrower += getField("Telephone") + ",";
			borrower += getField("OwnsProperty") + ",";
			borrower += "borrower,";
			borrower += getField("Sex") + ",";
			borrower += getField("CurrentResidenceDuration") + ",";
			borrower += getField("EmploymentDuration") + ",";
			borrower += Integer.toString(random.nextInt(15)) + ",";
			bos.write(borrower);
			bos.newLine();

			String second = getSecondAccountLine();
			if (!second.isEmpty()) {
				String addedLine = "," + second;
				bos.write(addedLine);
				bos.newLine();
			}
		}
		is.close();
		bos.close();
		sos.close();
	}

	private static String getFirstAccountCell() {
		String checking = getField("Checking - ", "CheckingStatus");
		String savings = getField("Savings - ", "ExistingSavings");
		if (!checking.isEmpty()) {
			return checking;
		} else
			return savings;
	}

	private static String getSecondAccountLine() {
		String checking = getField("Checking - ", "CheckingStatus");
		String savings = getField("Savings - ", "ExistingSavings");
		return (!checking.isEmpty() && !savings.isEmpty()) ? savings : "";
	}

	private static String getField(String name) {
		String value = ol.get(name);
		return (value == null) ? "" : ol.get(name);
	}

	private static String getField(String prefix, String name) {
		String value = ol.get(name);
		return (value == null) ? "" : prefix + ol.get(name);
	}

	private static String getJSONField(String name, String jsonName) {
		String value = ol.get(name);
		if (value.isEmpty()) {
			return "";
		}
		try {
			Integer.parseInt(value);
		} catch (NumberFormatException e) {
			if (!value.equals("true") && !value.equals("false")) {
				value = "\"" + value + "\"";
			}
		}
		return "\"" + jsonName + "\": " + value + ", ";
	}

	private static void generateJSONScenarios(String filename, String jsonFilename) throws Exception {
		BufferedReader is = new BufferedReader(new FileReader(filename));
		BufferedWriter os = new BufferedWriter(new FileWriter(jsonFilename));

		for (int i = 0; i <= 1000; i++) {

			String line = is.readLine();
			// Skip column headers
			if (i == 0)
				continue;

			parseFeatures(line);

			String scenario = "{";
			scenario += "\"loan\": {";
			scenario += getJSONField("LoanDuration", "duration");
			scenario += getJSONField("LoanPurpose", "loanPurpose");
			scenario += getJSONField("LoanAmount", "loanAmount");
			scenario += getJSONField("InstallmentPercent", "installmentPercent");

			scenario += "\"borrower\": {";

			int year = 2020 - Integer.parseInt(getField("Age"));
			String dob = year + "-10-21T08:36:28.000+0200";
			scenario += "\"dateOfBirth\": \"" + dob + "\", ";

			scenario += getJSONField("CreditHistory", "creditHistory");
			scenario += getJSONField("EmploymentDuration", "yearsEmployed");
			scenario += getJSONField("CurrentResidenceDuration", "yearsAtCurrentAddress");
			scenario += "\"yearsWithBank\": " + Integer.toString(random.nextInt(15)) + ", ";
			scenario += getJSONField("Job", "jobType");
			scenario += getJSONField("Sex", "sex");
			scenario += getJSONField("InstallmentPlans", "installmentPlans");
			scenario += getJSONField("Dependents", "dependents");
			scenario += getJSONField("Telephone", "phoneNumber");
			scenario += getJSONField("ForeignWorker", "citizen");
			scenario += getJSONField("Housing", "housing");
			scenario += getJSONField("OwnsProperty", "propertyOwnership");
			scenario += getJSONField("ExistingCreditsCount", "linesOfCredit");
			scenario += "\"role\": \"borrower\", ";

			scenario += "\"accounts\": [ ";
			String checking = getField("CheckingStatus");
			String savings = getField("ExistingSavings");
			if (!checking.isEmpty()) {
				scenario += "{ ";
				scenario += "\"type\": \"checking\", ";
				scenario += "\"balance\": " + getBalanceValue(checking);
				scenario += "}";
				if (!savings.isEmpty())
					scenario += ", ";
			}
			if (!savings.isEmpty()) {
				scenario += "{ ";
				scenario += "\"type\": \"savings\", ";
				scenario += "\"balance\": " + getBalanceValue(savings);
				scenario += "}";
			}
			scenario += "] } }, ";

			scenario += "\"riskScoringResource\": \"/v4/deployments/0d5b93f2-7bdf-4c27-b71f-21914573b9c9/predictions\" }";
			os.write(scenario);
			os.newLine();

		}
		is.close();
		os.close();
	}

	private static int getBalanceValue(String label) {
		switch (label) {
		case "less_0":
			return -12;
		case "0_to_200":
			return 130;
		case "greater_200":
			return 347;
		case "less_100":
			return 53;
		case "100_to_500":
			return 345;
		case "500_to_1000":
			return 712;
		case "greater_1000":
			return 3640;
		default:
			return 0;
		}
	}

	public static void main(String[] args) throws Exception {
		String in = "<var:your-data-folder>/gcr-training-data.csv";
		String jf = "<var:your-data-folder>/scenarios.json";
		generateJSONScenarios(in, jf);
	}
}
