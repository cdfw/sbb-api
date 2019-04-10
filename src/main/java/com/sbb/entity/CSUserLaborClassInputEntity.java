package com.sbb.entity;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "CS_USER_LABOR_CLASS_INPUT")
@IdClass(CSUserLaborClassInputEntityPK.class)
public class CSUserLaborClassInputEntity {

	@Id
    @Column(name = "USER_ID")
	private int userId;
	
	@Id
    @Column(name = "REGION_ID")
	private int regionId;
	
	@Id
    @Column(name = "TASK_ID")
	private String taskId;
	
	@Id
	@Column(name = "LABOR_CLASS_NAME")
	private String laborClassName;
	
	@Basic
	@Column(name = "POSITION_ID")
	private String positionId;
	
	@Basic
	@Column(name = "INPUT_HOURS")
	private double inputHours;
	
	@ManyToOne
    @JoinColumn(name = "task_id", referencedColumnName = "TASK_ID", nullable = false, insertable = false, updatable = false)
    private ServiceMatrixEntity serviceMatrixByTaskId;

    public ServiceMatrixEntity getServiceMatrixByTaskId() {
        return serviceMatrixByTaskId;
    }

    public void setServiceMatrixByTaskId(ServiceMatrixEntity serviceMatrixByTaskId) {
        this.serviceMatrixByTaskId = serviceMatrixByTaskId;
    }

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

	public String getTaskId() {
		return taskId;
	}

	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}

	public String getLaborClassName() {
		return laborClassName;
	}

	public void setLaborClassName(String laborClassName) {
		this.laborClassName = laborClassName;
	}

	public String getPositionId() {
		return positionId;
	}

	public void setPositionId(String positionId) {
		this.positionId = positionId;
	}

	public double getInputHours() {
		return inputHours;
	}

	public void setInputHours(double inputHours) {
		this.inputHours = inputHours;
	}

}
