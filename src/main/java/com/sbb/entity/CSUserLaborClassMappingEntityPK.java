package com.sbb.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;

public class CSUserLaborClassMappingEntityPK implements Serializable{

	@Id
	@Column(name="USER_ID")
	private int userId;
	
	@Id
	@Column(name="REGION_ID")
	private int regionId;
	
	@Id
	@Column(name="LABOR_CLASS_NAME")
	private String laborClassName;
    
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
	public String getLaborClassName() {
		return laborClassName;
	}
	public void setLaborClassName(String laborClassName) {
		this.laborClassName = laborClassName;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((laborClassName == null) ? 0 : laborClassName.hashCode());
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
		if (laborClassName == null) {
			if (other.laborClassName != null)
				return false;
		} else if (!laborClassName.equals(other.laborClassName))
			return false;
		if (regionId != other.regionId)
			return false;
		if (userId != other.userId)
			return false;
		return true;
	}
	
}
