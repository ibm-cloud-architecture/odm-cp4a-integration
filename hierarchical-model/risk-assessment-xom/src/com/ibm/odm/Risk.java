package com.ibm.odm;

public class Risk {

	public enum Level {
		low, medium, high;
	}

	private Level relationshipComponent;
	private Level predictiveComponent;
	private Level combinedValue;

	public Level getRelationshipComponent() {
		return relationshipComponent;
	}

	public void setRelationshipComponent(Level relationship) {
		this.relationshipComponent = relationship;
	}

	public Level getPredictiveComponent() {
		return predictiveComponent;
	}

	public void setPredictiveComponent(Level predictive) {
		this.predictiveComponent = predictive;
	}

	public Level getCombinedValue() {
		return combinedValue;
	}

	public void setCombinedValue(Level combined) {
		this.combinedValue = combined;
	}

}
