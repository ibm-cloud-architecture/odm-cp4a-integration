package com.ibm.odm.ml;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.logging.Logger;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class PredictionServices {
	private String wmlEndpoint;
	private String wmlToken;
	private List<String> featuresOrder = new ArrayList<String>();
	private HashMap<String, String> features = new HashMap<String, String>();

	private static Logger logger = Logger.getLogger(PredictionServices.class.getName());

	/**
	 * Creates an instance of a proxy to a prediction service associated with the
	 * given end-point.
	 * 
	 * @param wmlEndpoint
	 */
	public PredictionServices(String wmlEndpoint, String wmlToken) {
		this.wmlEndpoint = wmlEndpoint;
		this.wmlToken = wmlToken;
	}

	public void clearFeatures() {
		features.clear();
	}

	/**
	 * The features list is used to keep track of the order in the set of features
	 * so that payload fields and values is created in the proper sequence.
	 * 
	 * @param key
	 */
	public void defineFeature(String key) {
		features.put(key, null);
		featuresOrder.add(key);
	}

	public void addFeature(String key, String value) {
		features.put(key, value);
	}

	public void addFeature(String key, int value) {
		features.put(key, String.valueOf(value));
	}

	/**
	 * Calls the given prediction service (end-point + resource) using the features
	 * that have been collected in the features hash map.
	 * 
	 * @param resource
	 * @return
	 * @throws Exception
	 */
	public String runSinglePrediction(String resource) throws Exception {
		String url = wmlEndpoint + resource;
		String outputPayload = runPredictionService(url, wmlToken, getInputPayload());
		return getOutputValue(outputPayload);
	}

	/**
	 * Collects and format the feature values as JSON payload to submit to the
	 * scoring service. This should be refactored eventually to support better
	 * typing of the features.
	 * 
	 * @return
	 * @throws Exception
	 */
	private String getInputPayload() throws Exception {
		String payloadTemplate = "{\"input_data\": [{\"fields\": [%s], \"values\": [[%s]]}]}";
		String fields = "";
		String values = "";

		for (String key : featuresOrder) {
			fields += ", \"" + key + "\"";
			String value = features.get(key);
			if (value == null) {
				values += ", null";
			} else if (isInteger(value)) {
				values += ", " + value;
			} else {
				values += ", \"" + value + "\"";
			}
		}

		fields = fields.substring(2);
		values = values.substring(2);
		return String.format(payloadTemplate, fields, values);
	}

	private boolean isInteger(String value) {
		try {
			Integer.parseInt(value);
		} catch (NumberFormatException e) {
			return false;
		}
		return true;
	}

	/**
	 * The prediction service is expected to return a single class value, of the
	 * form:
	 * 
	 * <pre>
	 * {
	 *   "predictions": [{
	 *      "fields": ["prediction", "probability"],
	 *      "values": [["No Risk", [0.7, 0.3]]]
	 *    }]
	 * }
	 * </pre>
	 *
	 * @param outputPayload
	 * @return
	 * @throws Exception
	 */
	private String getOutputValue(String outputPayload) throws Exception {
		JSONObject jsonOutput = (JSONObject) (new JSONParser().parse(outputPayload));
		JSONObject prediction = (JSONObject) ((JSONArray) jsonOutput.get("predictions")).get(0);
		JSONArray value = (JSONArray) ((JSONArray) prediction.get("values")).get(0);
		return (String) value.get(0);
	}

	/**
	 * Generic code from WML to invoke the prediction end points.
	 * 
	 * @param url
	 * @param payload
	 * @throws IOException
	 */
	public static String runPredictionService(String url, String token, String payload) throws IOException {
		logger.info("raw scoring request: " + payload);
		HttpURLConnection scoringConnection = null;
		BufferedReader scoringBuffer = null;
		try {
			URL scoringUrl = new URL(url);
			scoringConnection = (HttpURLConnection) scoringUrl.openConnection();
			scoringConnection.setDoInput(true);
			scoringConnection.setDoOutput(true);
			scoringConnection.setRequestMethod("POST");
			scoringConnection.setRequestProperty("Accept", "application/json");
			scoringConnection.setRequestProperty("Authorization", "Bearer " + token);
			scoringConnection.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
			OutputStreamWriter writer = new OutputStreamWriter(scoringConnection.getOutputStream(), "UTF-8");

			writer.write(payload);
			writer.close();

			scoringBuffer = new BufferedReader(new InputStreamReader(scoringConnection.getInputStream()));
			StringBuffer jsonStringScoring = new StringBuffer();
			String lineScoring;
			while ((lineScoring = scoringBuffer.readLine()) != null) {
				jsonStringScoring.append(lineScoring);
			}
			logger.info("raw scoring response: " + jsonStringScoring);
			return jsonStringScoring.toString();
		} finally {
			if (scoringConnection != null) {
				scoringConnection.disconnect();
			}
			if (scoringBuffer != null) {
				scoringBuffer.close();
			}
		}
	}

	/**
	 * For local testing purpose
	 * 
	 * @param args
	 * @throws Exception
	 */
	public static void main(String[] args) throws Exception {
		final String token = "<var:your-wml-token>";
		final String fullPayload = "{\"input_data\":[{\"values\":[[\"0\",\"none\",\"female\",null,null,null,null,\"none\",null,null,\"0\",\"2\",\"0\",null,\"0\",null,\"yes\",\"0\",null,\"0\"]],\"fields\":[\"LoanDuration\",\"Telephone\",\"Sex\",\"CheckingStatus\",\"InstallmentPlans\",\"Housing\",\"EmploymentDuration\",\"OthersOnLoan\",\"LoanPurpose\",\"ExistingSavings\",\"LoanAmount\",\"Dependents\",\"CurrentResidenceDuration\",\"OwnsProperty\",\"ExistingCreditsCount\",\"CreditHistory\",\"ForeignWorker\",\"InstallmentPercent\",\"Job\",\"Age\"]}]}";
		final String url = "<var:your-cp4d-cluster-url>/v4/deployments/0d5b93f2-7bdf-4c27-b71f-21914573b9c9/predictions";
		System.out.println(runPredictionService(url, token, fullPayload));
	}
}
