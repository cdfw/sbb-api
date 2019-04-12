package com.sbb.entity;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class CSUserLaborClassMappingEntityPK implements Serializable {
    private int regionId;
    private int userId;
    private String positionId;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CSUserLaborClassMappingEntityPK that = (CSUserLaborClassMappingEntityPK) o;
        return regionId == that.regionId &&
                userId == that.userId &&
                Objects.equals(positionId, that.positionId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(regionId, userId, positionId);
    }
}
