package com.sbb.entity;



import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "user", schema = "cdfw_sbb_d")
public class UserEntity {
    private int id;
   // private int roleId;
    //private int dataTypeId;
    private String userName;
    private String password;
    private String userToken;
    private Integer createdBy;
    private Timestamp createdDtm;
    private Integer updatedBy;
    private Timestamp updatedDtm;
    private DataTypeEntity dataTypeByDataTypeId;
    private UserRoleEntity userRoleByRoleId;
    @JsonIgnore
    private Collection<MissionUserInputEntity> missionUserInputsById;
    private Collection<UserRegionMappingEntity> userRegionMappingsById;
    
   // @JsonIgnore
  //  private Collection<MissionUserInputEntity> missionUserInputsByApproverId;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "user_name")
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Basic
    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "user_token")
    public String getUserToken() {
        return userToken;
    }

    public void setUserToken(String userToken) {
        this.userToken = userToken;
    }

    @Basic
    @Column(name = "created_by")
    public Integer getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Integer createdBy) {
        this.createdBy = createdBy;
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
    @Column(name = "Updated_by")
    public Integer getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(Integer updatedBy) {
        this.updatedBy = updatedBy;
    }

    @Basic
    @Column(name = "updated_dtm")
    public Timestamp getUpdatedDtm() {
        return updatedDtm;
    }

    public void setUpdatedDtm(Timestamp updatedDtm) {
        this.updatedDtm = updatedDtm;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserEntity that = (UserEntity) o;
        return id == that.id &&

                Objects.equals(userName, that.userName) &&
                Objects.equals(password, that.password) &&
                Objects.equals(userToken, that.userToken) &&
                Objects.equals(createdBy, that.createdBy) &&
                Objects.equals(createdDtm, that.createdDtm) &&
                Objects.equals(updatedBy, that.updatedBy) &&
                Objects.equals(updatedDtm, that.updatedDtm);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id,  userName, password, userToken, createdBy, createdDtm, updatedBy, updatedDtm);
    }

    @ManyToOne
    @JoinColumn(name = "data_type_id", referencedColumnName = "data_type_id", nullable = false)
    public DataTypeEntity getDataTypeByDataTypeId() {
        return dataTypeByDataTypeId;
    }

    public void setDataTypeByDataTypeId(DataTypeEntity dataTypeByDataTypeId) {
        this.dataTypeByDataTypeId = dataTypeByDataTypeId;
    }

    @ManyToOne
    @JoinColumn(name = "role_id", referencedColumnName = "role_id", nullable = false)
    public UserRoleEntity getUserRoleByRoleId() {
        return userRoleByRoleId;
    }

    public void setUserRoleByRoleId(UserRoleEntity userRoleByRoleId) {
        this.userRoleByRoleId = userRoleByRoleId;
    }

    @OneToMany(mappedBy = "userById")
    public Collection<MissionUserInputEntity> getMissionUserInputsById() {
        return missionUserInputsById;
    }

    public void setMissionUserInputsById(Collection<MissionUserInputEntity> missionUserInputsById) {
        this.missionUserInputsById = missionUserInputsById;
    }
    
    
  /*  @OneToMany(mappedBy = "userByApproverId")
    public Collection<MissionUserInputEntity> getMissionUserInputsByApproverId() {
		return missionUserInputsByApproverId;
	}

	public void setMissionUserInputsByApproverId(Collection<MissionUserInputEntity> missionUserInputsByApproverId) {
		this.missionUserInputsByApproverId = missionUserInputsByApproverId;
	}
*/
	@OneToMany(mappedBy = "userById")
    public Collection<UserRegionMappingEntity> getUserRegionMappingsById() {
        return userRegionMappingsById;
    }

    public void setUserRegionMappingsById(Collection<UserRegionMappingEntity> userRegionMappingsById) {
        this.userRegionMappingsById = userRegionMappingsById;
    }
}
