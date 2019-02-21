package com.sbb.entity;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class JrsdctnCtgryEntityPK implements Serializable {
    private String categoryName;
    private String taskId;

    @Column(name = "category_name")
    @Id
    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    @Column(name = "task_id")
    @Id
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
        JrsdctnCtgryEntityPK that = (JrsdctnCtgryEntityPK) o;
        return Objects.equals(categoryName, that.categoryName) &&
                Objects.equals(taskId, that.taskId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(categoryName, taskId);
    }
}
