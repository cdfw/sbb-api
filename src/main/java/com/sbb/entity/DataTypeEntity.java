package com.sbb.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "data_type")
public class DataTypeEntity {
    private int dataTypeId;
    private String dataType;
    @JsonIgnore
    private Collection<UserEntity> usersByDataTypeId;

    @Id
    @Column(name = "data_type_id")
    public int getDataTypeId() {
        return dataTypeId;
    }

    public void setDataTypeId(int dataTypeId) {
        this.dataTypeId = dataTypeId;
    }

    @Basic
    @Column(name = "data_type")
    public String getDataType() {
        return dataType;
    }

    public void setDataType(String dataType) {
        this.dataType = dataType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DataTypeEntity that = (DataTypeEntity) o;
        return dataTypeId == that.dataTypeId &&
                Objects.equals(dataType, that.dataType);
    }

    @Override
    public int hashCode() {
        return Objects.hash(dataTypeId, dataType);
    }

    @OneToMany(mappedBy = "dataTypeByDataTypeId")
    public Collection<UserEntity> getUsersByDataTypeId() {
        return usersByDataTypeId;
    }

    public void setUsersByDataTypeId(Collection<UserEntity> usersByDataTypeId) {
        this.usersByDataTypeId = usersByDataTypeId;
    }
}
