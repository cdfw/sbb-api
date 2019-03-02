package com.sbb.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "labor_class", schema = "cdfw_sbb_d")
@IdClass(LaborClassEntityPK.class)
public class LaborClassEntity {
    private String title;
    private String role;
    private double time;
    private String taskId;
    @JsonIgnore
    private ServiceMatrixEntity serviceMatrixByTaskId;

    @Id
    @Column(name = "title")
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Id
    @Column(name = "role")
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Id
    @Column(name = "Time")
    public double getTime() {
        return time;
    }

    public void setTime(double time) {
        this.time = time;
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
        LaborClassEntity that = (LaborClassEntity) o;
        return time == that.time &&
                Objects.equals(title, that.title) &&
                Objects.equals(role, that.role) &&
                Objects.equals(taskId, that.taskId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(title, role, time, taskId);
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
