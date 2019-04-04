package com.sbb.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "CS_USER_LABOR_CLASS_MAPPING")
@IdClass(CSUserLaborClassMappingEntityPK.class)
public class CSUserLaborClassMappingEntity {
	
    private int userId;
    private int laborClassId;
    private int regionId;
    
    @JsonIgnore
    private UserEntity userById;
    private CSLaborClassLkupEntity laborClass;
    private RegionEntity region;

    @Id
    @Column(name = "USER_ID")
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Id
    @Column(name = "LABOR_CLASS_ID")
    public int getLaborClassId() {
        return laborClassId;
    }

    public void setLaborClassId(int laborClassId) {
        this.laborClassId = laborClassId;
    }

    @Id
    @Column(name = "REGION_ID")
	public int getRegionId() {
		return regionId;
	}

	public void setRegionId(int regionId) {
		this.regionId = regionId;
	}

	@ManyToOne
    @JoinColumn(name = "userId", referencedColumnName = "id", nullable = false, updatable = false, insertable = false)
    public UserEntity getUserById() {
        return userById;
    }

    public void setUserById(UserEntity userById) {
        this.userById = userById;
    }

    @ManyToOne
    @JoinColumn(name = "laborClassId", referencedColumnName = "ID", nullable = false, updatable = false, insertable = false)
    public CSLaborClassLkupEntity getLaborClass() {
        return laborClass;
    }

    public void setLaborClass(CSLaborClassLkupEntity laborClass) {
        this.laborClass = laborClass;
    }

    @ManyToOne
    @JoinColumn(name = "regionId", referencedColumnName = "region_id", nullable = false, updatable = false, insertable = false)
	public RegionEntity getRegion() {
		return region;
	}

	public void setRegion(RegionEntity region) {
		this.region = region;
	}
}
