package com.simplilearn.mvcconsumer.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Response {
	
	private int numFound;
	
	private int start;
	
	private double maxScore;

	
	
	
	public Response() {
		super();
	}

	public int getNumFound() {
		return numFound;
	}

	public void setNumFound(int numFound) {
		this.numFound = numFound;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public double getMaxScore() {
		return maxScore;
	}

	public void setMaxScore(double maxScore) {
		this.maxScore = maxScore;
	}
	
	
	
	

}
