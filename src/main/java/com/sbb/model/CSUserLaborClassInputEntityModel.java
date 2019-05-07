package com.sbb.model;

import java.math.BigDecimal;

public class CSUserLaborClassInputEntityModel {

	private String positionId;
	private BigDecimal hoursEntered;

	public CSUserLaborClassInputEntityModel(String positionId, BigDecimal hoursEntered) {
		super();
		this.positionId = positionId;
		this.hoursEntered = hoursEntered;
	}

	public String getPositionId() {
		return positionId;
	}

	public void setPositionId(String positionId) {
		this.positionId = positionId;
	}

	public BigDecimal getHoursEntered() {
		return hoursEntered;
	}

	public void setHoursEntered(BigDecimal hoursEntered) {
		this.hoursEntered = hoursEntered;
	}

}
