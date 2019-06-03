package com.sbb.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.math.BigDecimal;
import java.sql.Timestamp;

@Entity
@Table(name = "cs_user_labor_class_input", schema = "cdfwdev", catalog = "")
@IdClass(CSUserLaborClassInputEntityPK.class)
public class CSUserLaborClassInputEntity {
	private int regionId;
	private int userId;
	private String positionId;
	private String taskId;
	private BigDecimal inputHours;
	private String feedback;
	private CSUserLaborClassMappingEntity csUserLaborClassMapping;
	private ServiceMatrixEntityBasic serviceMatrixByTaskId;
	private UserEntity user;
	private Timestamp createdDtm;
	private Timestamp updtdDtm;
	private String sttsId;
	private StatusEntity statusBySttsId;
	private Integer approverId;
	private UserEntity userByApproverId;
	private Integer editedBy;
	private UserEntity userByEditedBy;
	private boolean duplicateInd;

	@Id
	@Column(name = "REGION_ID")
	public int getRegionId() {
		return regionId;
	}

	public void setRegionId(int regionId) {
		this.regionId = regionId;
	}

	@Id
	@Column(name = "USER_ID")
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	@Id
	@Column(name = "POSITION_ID")
	public String getPositionId() {
		return positionId;
	}

	public void setPositionId(String positionId) {
		this.positionId = positionId;
	}

	@Id
	@Column(name = "TASK_ID")
	public String getTaskId() {
		return taskId;
	}

	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}

	@Basic
	@Column(name = "INPUT_HOURS")
	public BigDecimal getInputHours() {
		return inputHours;
	}

	public void setInputHours(BigDecimal inputHours) {
		this.inputHours = inputHours;
	}

	@Basic
	@Column(name = "FEEDBACK")
	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
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
	@Column(name = "updated_dtm")
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

	@Basic
	@Column(name = "approver_id", nullable = true)
	public Integer getApproverId() {
		return approverId;
	}

	public void setApproverId(Integer approverId) {
		this.approverId = approverId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((feedback == null) ? 0 : feedback.hashCode());
		result = prime * result + ((inputHours == null) ? 0 : inputHours.hashCode());
		result = prime * result + ((positionId == null) ? 0 : positionId.hashCode());
		result = prime * result + regionId;
		result = prime * result + ((taskId == null) ? 0 : taskId.hashCode());
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
		CSUserLaborClassInputEntity other = (CSUserLaborClassInputEntity) obj;
		if (feedback == null) {
			if (other.feedback != null)
				return false;
		} else if (!feedback.equals(other.feedback))
			return false;
		if (inputHours == null) {
			if (other.inputHours != null)
				return false;
		} else if (!inputHours.equals(other.inputHours))
			return false;
		if (positionId == null) {
			if (other.positionId != null)
				return false;
		} else if (!positionId.equals(other.positionId))
			return false;
		if (regionId != other.regionId)
			return false;
		if (taskId == null) {
			if (other.taskId != null)
				return false;
		} else if (!taskId.equals(other.taskId))
			return false;
		if (userId != other.userId)
			return false;
		return true;
	}

	@JsonIgnore
	@ManyToOne
	@JoinColumns({
			@JoinColumn(name = "REGION_ID", referencedColumnName = "REGION_ID", nullable = false, updatable = false, insertable = false),
			@JoinColumn(name = "USER_ID", referencedColumnName = "USER_ID", nullable = false, updatable = false, insertable = false),
			@JoinColumn(name = "POSITION_ID", referencedColumnName = "POSITION_ID", nullable = false, updatable = false, insertable = false) })
	public CSUserLaborClassMappingEntity getCsUserLaborClassMapping() {
		return csUserLaborClassMapping;
	}

	public void setCsUserLaborClassMapping(CSUserLaborClassMappingEntity csUserLaborClassMapping) {
		this.csUserLaborClassMapping = csUserLaborClassMapping;
	}

	@ManyToOne
	@JoinColumn(name = "TASK_ID", referencedColumnName = "TASK_ID", nullable = false, updatable = false, insertable = false)
	public ServiceMatrixEntityBasic getServiceMatrixByTaskId() {
		return serviceMatrixByTaskId;
	}

	public void setServiceMatrixByTaskId(ServiceMatrixEntityBasic serviceMatrixByTaskId) {
		this.serviceMatrixByTaskId = serviceMatrixByTaskId;
	}

	@ManyToOne
	@JoinColumn(name = "USER_ID", referencedColumnName = "id", nullable = false, updatable = false, insertable = false)
	public UserEntity getUser() {
		return user;
	}

	public void setUser(UserEntity user) {
		this.user = user;
	}
	
    @ManyToOne
    @JoinColumn(name = "approver_id", referencedColumnName = "id", nullable = true, insertable = false, updatable = false)
    public UserEntity getUserByApproverId() {
		return userByApproverId;
	}

	public void setUserByApproverId(UserEntity userByApproverId) {
		this.userByApproverId = userByApproverId;
	}
	
    @ManyToOne
    @JoinColumn(name = "stts_id", referencedColumnName = "stts_id", insertable = false, updatable = false)
    public StatusEntity getStatusBySttsId() {
        return statusBySttsId;
    }

    public void setStatusBySttsId(StatusEntity statusBySttsId) {
        this.statusBySttsId = statusBySttsId;
    }
    
	@Basic
	@Column(name = "updated_by", nullable = true)
	public Integer getEditedBy() {
		return editedBy;
	}

	public void setEditedBy(Integer editedBy) {
		this.editedBy = editedBy;
	}

    @ManyToOne
    @JoinColumn(name = "updated_by", referencedColumnName = "id", nullable = true, insertable = false, updatable = false)
	public UserEntity getUserByEditedBy() {
		return userByEditedBy;
	}

	public void setUserByEditedBy(UserEntity userByEditedBy) {
		this.userByEditedBy = userByEditedBy;
	}

	@Transient
	public boolean isDuplicateInd() {
		return duplicateInd;
	}

	public void setDuplicateInd(boolean duplicateInd) {
		this.duplicateInd = duplicateInd;
	}
    
    
	
}

