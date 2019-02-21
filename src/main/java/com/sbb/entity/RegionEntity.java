package com.sbb.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "region", schema = "cdfw_sbb_d")
public class RegionEntity {
    private int regionId;
    private String regionName;
    @JsonIgnore
    private Collection<MissionUserInputEntity> missionUserInputsByRegionId;
    @JsonIgnore
    private Collection<UserRegionMappingEntity> userRegionMappingsByRegionId;

    @Id
    @Column(name = "region_id")
    public int getRegionId() {
        return regionId;
    }

    public void setRegionId(int regionId) {
        this.regionId = regionId;
    }

    @Basic
    @Column(name = "region_name")
    public String getRegionName() {
        return regionName;
    }

    public void setRegionName(String regionName) {
        this.regionName = regionName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RegionEntity that = (RegionEntity) o;
        return regionId == that.regionId &&
                Objects.equals(regionName, that.regionName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(regionId, regionName);
    }

    @OneToMany(mappedBy = "regionByRegionId")
    public Collection<MissionUserInputEntity> getMissionUserInputsByRegionId() {
        return missionUserInputsByRegionId;
    }

    public void setMissionUserInputsByRegionId(Collection<MissionUserInputEntity> missionUserInputsByRegionId) {
        this.missionUserInputsByRegionId = missionUserInputsByRegionId;
    }

    @OneToMany(mappedBy = "regionByRegionId")
    public Collection<UserRegionMappingEntity> getUserRegionMappingsByRegionId() {
        return userRegionMappingsByRegionId;
    }

    public void setUserRegionMappingsByRegionId(Collection<UserRegionMappingEntity> userRegionMappingsByRegionId) {
        this.userRegionMappingsByRegionId = userRegionMappingsByRegionId;
    }
}
