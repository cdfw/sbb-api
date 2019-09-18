package com.sbb.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "cs_user_labor_class_mapping")
@IdClass(CSUserLaborClassMappingEntityPK.class)
public class CSUserLaborClassMappingEntity {
    private int regionId;
    private int userId;
    private String positionId;
    private String laborClassName;
    private BigDecimal hours;
    private BigDecimal hoursEntered;
    private BigDecimal validatedHours;
    private String respondentName;
//    private Collection<CSUserLaborClassInputEntity> csUserLaborClassInputs;
    private RegionEntity regionByRegionId;
    private UserEntity userByUserId;

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

    @Basic
    @Column(name = "HOURS")
    public BigDecimal getHours() {
        return hours;
    }

    public void setHours(BigDecimal hours) {
        this.hours = hours;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CSUserLaborClassMappingEntity that = (CSUserLaborClassMappingEntity) o;
        return regionId == that.regionId &&
                userId == that.userId &&
                Objects.equals(positionId, that.positionId) &&
                Objects.equals(laborClassName, that.laborClassName) &&
                Objects.equals(hours, that.hours);
    }

    @Override
    public int hashCode() {
        return Objects.hash(regionId, userId, positionId, laborClassName, hours);
    }

//    @OneToMany(mappedBy = "csUserLaborClassMapping")
//    public Collection<CSUserLaborClassInputEntity> getCsUserLaborClassInputs() {
//        return csUserLaborClassInputs;
//    }
//
//    public void setCsUserLaborClassInputs(Collection<CSUserLaborClassInputEntity> csUserLaborClassInputs) {
//        this.csUserLaborClassInputs = csUserLaborClassInputs;
//    }

    @ManyToOne
    @JoinColumn(name = "REGION_ID", referencedColumnName = "region_id", nullable = false, updatable = false, insertable = false)
    public RegionEntity getRegionByRegionId() {
        return regionByRegionId;
    }

    public void setRegionByRegionId(RegionEntity regionByRegionId) {
        this.regionByRegionId = regionByRegionId;
    }

    @ManyToOne
    @JoinColumn(name = "USER_ID", referencedColumnName = "id", nullable = false, updatable = false, insertable = false)
    public UserEntity getUserByUserId() {
        return userByUserId;
    }

    public void setUserByUserId(UserEntity userByUserId) {
        this.userByUserId = userByUserId;
    }

    @Transient
	public BigDecimal getHoursEntered() {
		return hoursEntered;
	}

	public void setHoursEntered(BigDecimal hoursEntered) {
		this.hoursEntered = hoursEntered;
	}

	@Transient
	public String getRespondentName() {
		return respondentName;
	}

	public void setRespondentName(String respondentName) {
		this.respondentName = respondentName;
	}

	@Transient
	public BigDecimal getValidatedHours() {
		return validatedHours;
	}

	public void setValidatedHours(BigDecimal validatedHours) {
		this.validatedHours = validatedHours;
	}
	
	
	
	
}

