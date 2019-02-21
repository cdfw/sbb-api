package com.sbb.entity;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class LaborClassEntityPK implements Serializable {
    private String title;
    private String role;
    private int time;
    private String taskId;

    @Column(name = "title")
    @Id
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Column(name = "role")
    @Id
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Column(name = "Time")
    @Id
    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
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
        LaborClassEntityPK that = (LaborClassEntityPK) o;
        return time == that.time &&
                Objects.equals(title, that.title) &&
                Objects.equals(role, that.role) &&
                Objects.equals(taskId, that.taskId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(title, role, time, taskId);
    }
}
