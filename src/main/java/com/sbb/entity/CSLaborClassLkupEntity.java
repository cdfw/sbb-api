package com.sbb.entity;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="CS_LABOR_CLASS_LKUP")
public class CSLaborClassLkupEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column(name="LABOR_CLASS_NAME")
	private String labor_class_name;
	
	@Column(name="HOURS")
	private Double hours;
	
//	@JsonIgnore
//    private Collection<UserEntity> usersByLaborClassId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLabor_class_name() {
		return labor_class_name;
	}

	public void setLabor_class_name(String labor_class_name) {
		this.labor_class_name = labor_class_name;
	}

	public Double getHours() {
		return hours;
	}

	public void setHours(Double hours) {
		this.hours = hours;
	}

//	public Collection<UserEntity> getUsersByLaborClassId() {
//		return usersByLaborClassId;
//	}
//
//	public void setUsersByLaborClassId(Collection<UserEntity> usersByLaborClassId) {
//		this.usersByLaborClassId = usersByLaborClassId;
//	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((hours == null) ? 0 : hours.hashCode());
		result = prime * result + id;
		result = prime * result + ((labor_class_name == null) ? 0 : labor_class_name.hashCode());
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
		CSLaborClassLkupEntity other = (CSLaborClassLkupEntity) obj;
		if (hours == null) {
			if (other.hours != null)
				return false;
		} else if (!hours.equals(other.hours))
			return false;
		if (id != other.id)
			return false;
		if (labor_class_name == null) {
			if (other.labor_class_name != null)
				return false;
		} else if (!labor_class_name.equals(other.labor_class_name))
			return false;
		return true;
	}

}
