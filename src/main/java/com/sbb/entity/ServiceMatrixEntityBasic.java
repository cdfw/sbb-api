package com.sbb.entity;

import java.util.Objects;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "service_matrix")
public class ServiceMatrixEntityBasic {
    private String taskId;
    private String serviceName;
    private String program;
    private String subProgram;
    private String taskCategory;
    private String taskName;
    private String taskDesc;

    @Id
    @Column(name = "TASK_ID")
    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    @Basic
    @Column(name = "SERVICE_NAME")
    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    @Basic
    @Column(name = "PROGRAM")
    public String getProgram() {
        return program;
    }

    public void setProgram(String program) {
        this.program = program;
    }

    @Basic
    @Column(name = "SUB_PROGRAM")
    public String getSubProgram() {
        return subProgram;
    }

    public void setSubProgram(String subProgram) {
        this.subProgram = subProgram;
    }

    @Basic
    @Column(name = "TASK_CATEGORY")
    public String getTaskCategory() {
        return taskCategory;
    }

    public void setTaskCategory(String taskCategory) {
        this.taskCategory = taskCategory;
    }

    @Basic
    @Column(name = "TASK_NAME")
    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    @Basic
    @Column(name = "TASK_DESC")
    public String getTaskDesc() {
        return taskDesc;
    }

    public void setTaskDesc(String taskDesc) {
        this.taskDesc = taskDesc;
    }    

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ServiceMatrixEntityBasic that = (ServiceMatrixEntityBasic) o;
        return Objects.equals(taskId, that.taskId) &&
                Objects.equals(serviceName, that.serviceName) &&
                Objects.equals(program, that.program) &&
                Objects.equals(subProgram, that.subProgram) &&
                Objects.equals(taskCategory, that.taskCategory) &&
                Objects.equals(taskName, that.taskName) &&
                Objects.equals(taskDesc, that.taskDesc);
    }

    @Override
    public int hashCode() {
        return Objects.hash(taskId, serviceName, program, subProgram, taskCategory, taskName, taskDesc);
    }

}
