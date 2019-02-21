package com.sbb.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "status", schema = "cdfw_sbb_d")
public class StatusEntity {
    private String sttsId;
    private String statusCode;
    @JsonIgnore
    private Collection<ServiceMatrixEntity> serviceMatricesBySttsId;
    @JsonIgnore
    private Collection<MissionUserInputEntity> missionUserInputsBySttsId;

    @Id
    @Column(name = "stts_id")
    public String getSttsId() {
        return sttsId;
    }

    public void setSttsId(String sttsId) {
        this.sttsId = sttsId;
    }

    @Basic
    @Column(name = "status_code")
    public String getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(String statusCode) {
        this.statusCode = statusCode;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StatusEntity that = (StatusEntity) o;
        return Objects.equals(sttsId, that.sttsId) &&
                Objects.equals(statusCode, that.statusCode);
    }

    @Override
    public int hashCode() {
        return Objects.hash(sttsId, statusCode);
    }

    @OneToMany(mappedBy = "statusBySttsId")
    public Collection<ServiceMatrixEntity> getServiceMatricesBySttsId() {
        return serviceMatricesBySttsId;
    }

    public void setServiceMatricesBySttsId(Collection<ServiceMatrixEntity> serviceMatricesBySttsId) {
        this.serviceMatricesBySttsId = serviceMatricesBySttsId;
    }

    @OneToMany(mappedBy = "statusBySttsId")
    public Collection<MissionUserInputEntity> getMissionUserInputsBySttsId() {
        return missionUserInputsBySttsId;
    }

    public void setMissionUserInputsBySttsId(Collection<MissionUserInputEntity> missionUserInputsBySttsId) {
        this.missionUserInputsBySttsId = missionUserInputsBySttsId;
    }
}
