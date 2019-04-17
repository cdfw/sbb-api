package com.sbb.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "mission_user_input")
@IdClass(MissionUserInputEntityPK.class)
public class MissionUserInputEntityForMatrix {
    private int id;
    private int regionId;
    private String taskId;
    private Integer inputValue;
    private Timestamp createdDtm;
    private Timestamp updtdDtm;
    private String sttsId;
    private Integer approverId;
    private String feedback;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Id
    @Column(name = "region_id")
    public int getRegionId() {
        return regionId;
    }

    public void setRegionId(int regionId) {
        this.regionId = regionId;
    }

    @Id
    @Column(name = "task_id")
    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    @Basic
    @Column(name = "input_value")
    public Integer getInputValue() {
        return inputValue;
    }

    public void setInputValue(Integer inputValue) {
        this.inputValue = inputValue;
    }

    @Basic
    @Column(name = "created_dtm")
    public Timestamp getCreatedDtm() {
        return createdDtm;
    }

    public void setCreatedDtm(Timestamp createdDtm) {
        this.createdDtm = createdDtm;
    }

    @Basic
    @Column(name = "updtd_dtm")
    public Timestamp getUpdtdDtm() {
        return updtdDtm;
    }

    public void setUpdtdDtm(Timestamp updtdDtm) {
        this.updtdDtm = updtdDtm;
    }

    @Basic
    @Column(name = "stts_id")
    public String getSttsId() {
        return sttsId;
    }

    public void setSttsId(String sttsId) {
        this.sttsId = sttsId;
    }


    @Override
    public int hashCode() {
        return Objects.hash(id, regionId, taskId, inputValue, createdDtm, updtdDtm, sttsId);
    }

    @Basic
    @Column(name = "approver_id", nullable=true)
	public Integer getApproverId() {
		return approverId;
	}

	public void setApproverId(Integer approverId) {
		this.approverId = approverId;
	}

	@Basic
	@Column(name="feedback")
	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
    
    
}
