package com.sbb.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;

public class CSUserLaborClassMappingEntityPK implements Serializable {

	@Id
	@Column(name = "USER_ID")
	private int userId;

	@Id
	@Column(name = "REGION_ID")
	private int regionId;

	@Id
	@Column(name = "POSITION_ID")
	private String positionId;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getRegionId() {
		return regionId;
	}

	public void setRegionId(int regionId) {
		this.regionId = regionId;
	}

	public String getPositionId() {
		return positionId;
	}

	public void setPositionId(String positionId) {
		this.positionId = positionId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((positionId == null) ? 0 : positionId.hashCode());
		result = prime * result + regionId;
		result = prime * result + userId;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CSUserLaborClassMappingEntityPK other = (CSUserLaborClassMappingEntityPK) obj;
		if (positionId == null) {
			if (other.positionId != null)
				return false;
		} else if (!positionId.equals(other.positionId))
			return false;
		if (regionId != other.regionId)
			return false;
		if (userId != other.userId)
			return false;
		return true;
	}

}
