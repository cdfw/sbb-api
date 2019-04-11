package com.sbb.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "CS_USER_LABOR_CLASS_MAPPING")
@IdClass(CSUserLaborClassMappingEntityPK.class)
public class CSUserLaborClassMappingEntity {
	
    private int userId;
    private int regionId;
    private String laborClassName;
    private String positionId;
    private double hours;
    
    @JsonIgnore
    private UserEntity userById;
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
    @JoinColumn(name = "regionId", referencedColumnName = "region_id", nullable = false, updatable = false, insertable = false)
	public RegionEntity getRegion() {
		return region;
	}

	public void setRegion(RegionEntity region) {
		this.region = region;
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
	@Column(name = "POSITION_ID")
	public String getPositionId() {
		return positionId;
	}

	public void setPositionId(String positionId) {
		this.positionId = positionId;
	}

	@Basic
	@Column(name = "HOURS")
	public double getHours() {
		return hours;
	}

	public void setHours(double hours) {
		this.hours = hours;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		long temp;
		temp = Double.doubleToLongBits(hours);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((laborClassName == null) ? 0 : laborClassName.hashCode());
		result = prime * result + ((positionId == null) ? 0 : positionId.hashCode());
		result = prime * result + regionId;
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
		CSUserLaborClassMappingEntity other = (CSUserLaborClassMappingEntity) obj;
		if (Double.doubleToLongBits(hours) != Double.doubleToLongBits(other.hours))
			return false;
		if (laborClassName == null) {
			if (other.laborClassName != null)
				return false;
		} else if (!laborClassName.equals(other.laborClassName))
			return false;
		if (positionId == null) {
			if (other.positionId != null)
				return false;
		} else if (!positionId.equals(other.positionId))
			return false;
		if (regionId != other.regionId)
			return false;
		if (userId != other.userId)
			return false;
		return true;
	}
}
