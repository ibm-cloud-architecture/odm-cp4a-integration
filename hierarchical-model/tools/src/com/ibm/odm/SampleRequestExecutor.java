package com.ibm.odm;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Random;

public class SampleRequestExecutor {

	private static String endpoint = "https://decisionserverconsole.odm.icp4adeploy.cp4a.pathfinder-royalbankofc-73aebe06726e634c608c4167edcc2aeb-0000.tor01.containers.appdomain.cloud/DecisionService/rest/v1";
	private static String odmToken = "LTPATOKEN2_DS_icp4adeploy=UV7wViCfu1b0lsYjCxxhXZnTaKMyT4XgQsvsIMASk+sYdl6feVUcoz1moqZvaTDu4XAkfvvoKqgOScpxeqidrkGJOL8aLrOaPNPIZifsSSMQpe8FhFS8Rulxskch5vkgErkmwYqP2nqf8gAmxhCRxs1Y2n2t7iqjv5ZmAISicocRKnBn0SG8RkC5s36qiyQypFnj2TQdW2dm1bSVjgedX/ldwUbW4wwLnQ8Ev+mZfUgjCdmCRaDg5r8iJEjI9bLRn+z4ubPbQIZs8+rN5aFaOtnCw+hKr9m0VuCDM1Pim9+YRv1OR6BF/3j+yUDe534Y";
	private static Random random = new Random();

	static {
		javax.net.ssl.HttpsURLConnection.setDefaultHostnameVerifier(new javax.net.ssl.HostnameVerifier() {
			public boolean verify(String hostname, javax.net.ssl.SSLSession sslSession) {
				return true;
			}
		});
	}

	private static void run(String requestFile, String champion, String challenger, int championPercent)
			throws Exception {
		BufferedReader is = new BufferedReader(new FileReader(requestFile));
		String request;
		while ((request = is.readLine()) != null) {
			int choice = random.nextInt(100);
			boolean executeChampion = (choice <= championPercent);
			String rulesetPath = executeChampion ? champion : challenger;
			String executor = executeChampion ? "champion" : "challenger";
			String response = run(request, rulesetPath);
			System.out.println("Execution by " + executor + ": " + response);
		}
		is.close();
	}

	public static String run(String request, String rulesetPath) throws Exception {

		HttpURLConnection connection = null;
		BufferedReader buffer = null;
		try {
			String url = endpoint + rulesetPath;
			URL decisionUrl = new URL(url);
			connection = (HttpURLConnection) decisionUrl.openConnection();
			connection.setDoInput(true);
			connection.setDoOutput(true);
			connection.setRequestMethod("POST");
			connection.setRequestProperty("Accept", "application/json");
			connection.setRequestProperty("Authorization", "Basic cmVzQWRtaW46cmVzQWRtaW4=");
			connection.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
			connection.setRequestProperty("Cookie", odmToken);
			OutputStreamWriter writer = new OutputStreamWriter(connection.getOutputStream(), "UTF-8");

			writer.write(request);
			writer.close();

			buffer = new BufferedReader(new InputStreamReader(connection.getInputStream()));
			StringBuffer jsonStringScoring = new StringBuffer();
			String lineScoring;
			while ((lineScoring = buffer.readLine()) != null) {
				jsonStringScoring.append(lineScoring);
			}

			return jsonStringScoring.toString();
		} finally {
			if (connection != null) {
				connection.disconnect();
			}
			if (buffer != null) {
				buffer.close();
			}
		}
	}

	public static void main(String[] args) throws Exception {
		String requestFile = "<var:your-data-folder>/scenarios.json";
		String champion = args[0];
		String challenger = args[1];
		int percent = Integer.parseInt(args[2]);
		System.out.println("Champion ruleset: " + champion + " @ " + percent + "%");
		System.out.println("Challenger ruleset: " + challenger + " @ " + (100-percent) + "%");
		System.out.println();
		run(requestFile, champion, challenger, percent);
	}
}
