package com.sbb.entity;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class CSUserLaborClassInputEntityPK  implements Serializable{

	private int regionId;
    private int userId;
    private String positionId;
    private String taskId;

    @Column(name = "REGION_ID")
    @Id
    public int getRegionId() {
        return regionId;
    }

    public void setRegionId(int regionId) {
        this.regionId = regionId;
    }

    @Column(name = "USER_ID")
    @Id
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Column(name = "POSITION_ID")
    @Id
    public String getPositionId() {
        return positionId;
    }

    public void setPositionId(String positionId) {
        this.positionId = positionId;
    }

    @Column(name = "TASK_ID")
    @Id
    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CSUserLaborClassInputEntityPK that = (CSUserLaborClassInputEntityPK) o;
        return regionId == that.regionId &&
                userId == that.userId &&
                Objects.equals(positionId, that.positionId) &&
                Objects.equals(taskId, that.taskId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(regionId, userId, positionId, taskId);
    }

}
