package com.sbb.entity;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class UserRegionMappingEntityPK implements Serializable {
    private int id;
    private int regionId;

    @Column(name = "id")
    @Id
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "region_id")
    @Id
    public int getRegionId() {
        return regionId;
    }

    public void setRegionId(int regionId) {
        this.regionId = regionId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserRegionMappingEntityPK that = (UserRegionMappingEntityPK) o;
        return id == that.id &&
                regionId == that.regionId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, regionId);
    }
}
