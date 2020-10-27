package com.ibm.odm.data;

import java.util.Hashtable;

public class Payload {

	private Hashtable<String, String> kvps = new Hashtable<String, String>();
		
	public int getIntValue(String key) {
		return Integer.parseInt(kvps.get(key));
	}
	
	public boolean getBooleanValue(String key) {
		return Boolean.parseBoolean(kvps.get(key));
	}
	
	public String getStringValue(String key) {
		return kvps.get(key);
	}

	public boolean isDefined(String key) {
		return kvps.containsKey(key);
	}
	
	public void setIntValue(String key, int value) {
		kvps.put(key,  Integer.toString(value));
	}
	
	public void setBooleanValue(String key, boolean value) {
		kvps.put(key,  Boolean.toString(value));
	}
	
	public void setStringValue(String key, String value) {
		kvps.put(key,  value);
	}

}
