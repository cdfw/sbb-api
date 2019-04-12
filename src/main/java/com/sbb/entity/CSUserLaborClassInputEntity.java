package com.sbb.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Table(name = "cs_user_labor_class_input", schema = "cdfwdev", catalog = "")
@IdClass(CSUserLaborClassInputEntityPK.class)
public class CSUserLaborClassInputEntity {
    private int regionId;
    private int userId;
    private String positionId;
    private String laborClassName;
    private String taskId;
    private BigDecimal inputHours;
    private CSUserLaborClassMappingEntity csUserLaborClassMapping;
    private ServiceMatrixEntity serviceMatrixByTaskId;

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

    @Basic
    @Column(name = "LABOR_CLASS_NAME")
    public String getLaborClassName() {
        return laborClassName;
    }

    public void setLaborClassName(String laborClassName) {
        this.laborClassName = laborClassName;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CSUserLaborClassInputEntity that = (CSUserLaborClassInputEntity) o;
        return regionId == that.regionId &&
                userId == that.userId &&
                Objects.equals(positionId, that.positionId) &&
                Objects.equals(laborClassName, that.laborClassName) &&
                Objects.equals(taskId, that.taskId) &&
                Objects.equals(inputHours, that.inputHours);
    }

    @Override
    public int hashCode() {
        return Objects.hash(regionId, userId, positionId, laborClassName, taskId, inputHours);
    }

    @JsonIgnore
    @ManyToOne
    @JoinColumns({@JoinColumn(name = "REGION_ID", referencedColumnName = "REGION_ID", nullable = false, updatable = false, insertable = false), 
    	@JoinColumn(name = "USER_ID", referencedColumnName = "USER_ID", nullable = false, updatable = false, insertable = false), 
    	@JoinColumn(name = "POSITION_ID", referencedColumnName = "POSITION_ID", nullable = false, updatable = false, insertable = false)})
    public CSUserLaborClassMappingEntity getCsUserLaborClassMapping() {
        return csUserLaborClassMapping;
    }

    public void setCsUserLaborClassMapping(CSUserLaborClassMappingEntity csUserLaborClassMapping) {
        this.csUserLaborClassMapping = csUserLaborClassMapping;
    }

    @ManyToOne
    @JoinColumn(name = "TASK_ID", referencedColumnName = "TASK_ID", nullable = false, updatable = false, insertable = false)
    public ServiceMatrixEntity getServiceMatrixByTaskId() {
        return serviceMatrixByTaskId;
    }

    public void setServiceMatrixByTaskId(ServiceMatrixEntity serviceMatrixByTaskId) {
        this.serviceMatrixByTaskId = serviceMatrixByTaskId;
    }
}
