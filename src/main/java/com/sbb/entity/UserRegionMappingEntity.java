package com.sbb.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "user_region_mapping")
@IdClass(UserRegionMappingEntityPK.class)
public class UserRegionMappingEntity {
    private int id;
    private int regionId;
    @JsonIgnore
    private UserEntity userById;
    private RegionEntity regionByRegionId;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserRegionMappingEntity that = (UserRegionMappingEntity) o;
        return id == that.id &&
                regionId == that.regionId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, regionId);
    }

    @ManyToOne
    @JoinColumn(name = "id", referencedColumnName = "id", nullable = false, updatable = false, insertable = false)
    public UserEntity getUserById() {
        return userById;
    }

    public void setUserById(UserEntity userById) {
        this.userById = userById;
    }

    @ManyToOne
    @JoinColumn(name = "region_id", referencedColumnName = "region_id", nullable = false, updatable = false, insertable = false)
    public RegionEntity getRegionByRegionId() {
        return regionByRegionId;
    }

    public void setRegionByRegionId(RegionEntity regionByRegionId) {
        this.regionByRegionId = regionByRegionId;
    }
}
