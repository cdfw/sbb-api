package com.sbb.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "CS_USER_LABOR_CLASS_MAPPING")
@IdClass(CSUserLaborClassMappingEntityPK.class)
public class CSUserLaborClassMappingEntity {
	
    private int userId;
    private int laborClassId;
    
    @JsonIgnore
    private UserEntity userById;
    private CSLaborClassLkupEntity csLaborClassbyLaborClassId;

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
    public CSLaborClassLkupEntity getCsLaborClassbyLaborClassId() {
        return csLaborClassbyLaborClassId;
    }

    public void setCsLaborClassbyLaborClassId(CSLaborClassLkupEntity csLaborClassbyLaborClassId) {
        this.csLaborClassbyLaborClassId = csLaborClassbyLaborClassId;
    }
}
