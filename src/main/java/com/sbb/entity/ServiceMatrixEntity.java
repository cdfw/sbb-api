package com.sbb.entity;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "service_matrix", schema = "cdfw_sbb_d")
public class ServiceMatrixEntity {
    private String taskId;
    private String serviceName;
    private String program;
    private String subProgram;
    private String taskCategory;
    private String taskName;
    private String taskDesc;
    private String multDesc;
    private Integer frequency;
    //private String sttsId;
    private StatusEntity statusBySttsId;
    private Collection<JrsdctnCtgryEntity> jrsdctnCtgriesByTaskId;
    private Collection<LaborClassEntity> laborClassesByTaskId;
    private Collection<MissionUserInputEntity> missionUserInputsByTaskId;

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

    @Basic
    @Column(name = "MULT_DESC")
    public String getMultDesc() {
        return multDesc;
    }

    public void setMultDesc(String multDesc) {
        this.multDesc = multDesc;
    }

    @Basic
    @Column(name = "FREQUENCY")
    public Integer getFrequency() {
        return frequency;
    }

    public void setFrequency(Integer frequency) {
        this.frequency = frequency;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ServiceMatrixEntity that = (ServiceMatrixEntity) o;
        return Objects.equals(taskId, that.taskId) &&
                Objects.equals(serviceName, that.serviceName) &&
                Objects.equals(program, that.program) &&
                Objects.equals(subProgram, that.subProgram) &&
                Objects.equals(taskCategory, that.taskCategory) &&
                Objects.equals(taskName, that.taskName) &&
                Objects.equals(taskDesc, that.taskDesc) &&
                Objects.equals(multDesc, that.multDesc) &&
                Objects.equals(frequency, that.frequency) ;
    }

    @Override
    public int hashCode() {
        return Objects.hash(taskId, serviceName, program, subProgram, taskCategory, taskName, taskDesc, multDesc, frequency);
    }

    @ManyToOne
    @JoinColumn(name = "stts_id", referencedColumnName = "stts_id")
    public StatusEntity getStatusBySttsId() {
        return statusBySttsId;
    }

    public void setStatusBySttsId(StatusEntity statusBySttsId) {
        this.statusBySttsId = statusBySttsId;
    }

    @OneToMany(mappedBy = "serviceMatrixByTaskId")
    public Collection<JrsdctnCtgryEntity> getJrsdctnCtgriesByTaskId() {
        return jrsdctnCtgriesByTaskId;
    }

    public void setJrsdctnCtgriesByTaskId(Collection<JrsdctnCtgryEntity> jrsdctnCtgriesByTaskId) {
        this.jrsdctnCtgriesByTaskId = jrsdctnCtgriesByTaskId;
    }

    @OneToMany(mappedBy = "serviceMatrixByTaskId")
    public Collection<LaborClassEntity> getLaborClassesByTaskId() {
        return laborClassesByTaskId;
    }

    public void setLaborClassesByTaskId(Collection<LaborClassEntity> laborClassesByTaskId) {
        this.laborClassesByTaskId = laborClassesByTaskId;
    }

    @OneToMany(mappedBy = "serviceMatrixByTaskId")
    public Collection<MissionUserInputEntity> getMissionUserInputsByTaskId() {
        return missionUserInputsByTaskId;
    }

    public void setMissionUserInputsByTaskId(Collection<MissionUserInputEntity> missionUserInputsByTaskId) {
        this.missionUserInputsByTaskId = missionUserInputsByTaskId;
    }
}
