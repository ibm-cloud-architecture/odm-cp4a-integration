package com.ibm.odm.simulation;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import javax.batch.api.BatchProperty;
import javax.batch.api.chunk.AbstractItemReader;
import javax.inject.Inject;

import com.ibm.odm.data.Payload;
import com.ibm.rules.cdi.core.Scenario;

public class ScenarioReader extends AbstractItemReader {
	private int currentItem;

	/**
	 * The CSV file name containing the data.
	 */
	@Inject
	@BatchProperty(name = "dataset.name")
	String dataSetName;

	private String[] fieldNames;
	private List<String[]> testData;

	@Override
	public void open(java.io.Serializable checkpoint) throws Exception {
		String resourceName = dataSetName;
		InputStream in = getClass().getResourceAsStream(resourceName);
		if (in != null) {
			testData = new ArrayList<String[]>();
			BufferedReader reader = new BufferedReader(new InputStreamReader(in));
			for (String line; (line = reader.readLine()) != null;) {
				String[] tokens = line.split(",");
				if (fieldNames == null) {
					fieldNames = tokens;
				} else {
					testData.add(tokens);
				}
			}
		}
	}

	@Override
	public Object readItem() throws Exception {
		if (this.testData == null || this.currentItem >= this.testData.size()) {
			return null;
		}

		String[] fields = this.testData.get(this.currentItem);
		Scenario scenario = new Scenario();
		scenario.setName("Scenario #" + String.format("%02d", currentItem + 1));

		Payload payload = new Payload();
		scenario.addInputParameter("payload", payload);

		for (int i = 0; i < fieldNames.length; i++) {
			payload.setStringValue(fieldNames[i], fields[i]);
		}
		this.currentItem++;
		return scenario;
	}

}
