package com.sbb.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "mission_user_input", schema = "cdfw_sbb_d")
@IdClass(MissionUserInputEntityPK.class)
public class MissionUserInputEntity {
    private int id;
    private int regionId;
    private String taskId;
    private Integer inputValue;
    private Timestamp createdDtm;
    private Timestamp updtdDtm;
    private String sttsId;
    private UserEntity userById;
    private RegionEntity regionByRegionId;
    @JsonIgnore
    private ServiceMatrixEntity serviceMatrixByTaskId;
    private StatusEntity statusBySttsId;

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
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MissionUserInputEntity that = (MissionUserInputEntity) o;
        return id == that.id &&
                regionId == that.regionId &&
                Objects.equals(taskId, that.taskId) &&
                Objects.equals(inputValue, that.inputValue) &&
                Objects.equals(createdDtm, that.createdDtm) &&
                Objects.equals(updtdDtm, that.updtdDtm) &&
                Objects.equals(sttsId, that.sttsId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, regionId, taskId, inputValue, createdDtm, updtdDtm, sttsId);
    }

    @ManyToOne
    @JoinColumn(name = "id", referencedColumnName = "id", nullable = false, insertable = false, updatable = false)
    public UserEntity getUserById() {
        return userById;
    }

    public void setUserById(UserEntity userById) {
        this.userById = userById;
    }

    @ManyToOne
    @JoinColumn(name = "region_id", referencedColumnName = "region_id", nullable = false, insertable = false, updatable = false)
    public RegionEntity getRegionByRegionId() {
        return regionByRegionId;
    }

    public void setRegionByRegionId(RegionEntity regionByRegionId) {
        this.regionByRegionId = regionByRegionId;
    }

    @ManyToOne
    @JoinColumn(name = "task_id", referencedColumnName = "TASK_ID", nullable = false, insertable = false, updatable = false)
    public ServiceMatrixEntity getServiceMatrixByTaskId() {
        return serviceMatrixByTaskId;
    }

    public void setServiceMatrixByTaskId(ServiceMatrixEntity serviceMatrixByTaskId) {
        this.serviceMatrixByTaskId = serviceMatrixByTaskId;
    }

    @ManyToOne
    @JoinColumn(name = "stts_id", referencedColumnName = "stts_id", insertable = false, updatable = false)
    public StatusEntity getStatusBySttsId() {
        return statusBySttsId;
    }

    public void setStatusBySttsId(StatusEntity statusBySttsId) {
        this.statusBySttsId = statusBySttsId;
    }
}
