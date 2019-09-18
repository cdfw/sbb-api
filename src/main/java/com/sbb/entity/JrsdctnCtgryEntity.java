package com.sbb.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "jrsdctn_ctgry")
@IdClass(JrsdctnCtgryEntityPK.class)
public class JrsdctnCtgryEntity {
    private String categoryName;
    private String taskId;
    @JsonIgnore
    private ServiceMatrixEntity serviceMatrixByTaskId;

    @Id
    @Column(name = "category_name")
    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    @Id
    @Column(name = "task_id")
    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        JrsdctnCtgryEntity that = (JrsdctnCtgryEntity) o;
        return Objects.equals(categoryName, that.categoryName) &&
                Objects.equals(taskId, that.taskId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(categoryName, taskId);
    }


    @ManyToOne
    @JoinColumn(name = "task_id", referencedColumnName = "TASK_ID", nullable = false, insertable = false, updatable = false)
    public ServiceMatrixEntity getServiceMatrixByTaskId() {
        return serviceMatrixByTaskId;
    }

    public void setServiceMatrixByTaskId(ServiceMatrixEntity serviceMatrixByTaskId) {
        this.serviceMatrixByTaskId = serviceMatrixByTaskId;
    }

}
