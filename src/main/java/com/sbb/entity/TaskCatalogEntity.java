package com.sbb.entity;

import java.util.Objects;

import javax.persistence.Basic;
import javax.persistence.Cacheable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PostLoad;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "service_matrix", schema = "cdfw_sbb_d")
public class TaskCatalogEntity {
    private String taskId;
    private String serviceName;
    private String program;
    private String subProgram;
    private String taskCategory;
    private String taskName;
    private String taskDesc;
    private String multDesc;
    private String desiredPerf;
    private String addtnlBudgetFator;
    private Integer frequency;
//    private StatusEntity statusBySttsId;
    private int inputCount;
    private String myInput;
    private String taskStatus;
    private String inputReceived;
    private int feedbackCount;
    private String feedbackReceived;
    private String serviceGlossary;
    private String toBeEnteredBy;


    @Basic
    @Column(name = "enter_by")
    public String getToBeEnteredBy() {
		return toBeEnteredBy;
	}

	public void setToBeEnteredBy(String toBeEnteredBy) {
		this.toBeEnteredBy = toBeEnteredBy;
	}

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
    @Column(name = "service_glossary")
    public String getServiceGlossary() {
        return serviceGlossary;
    }

    public void setServiceGlossary(String serviceGlossary) {
        this.serviceGlossary = serviceGlossary;
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

    @Basic
    @Column(name = "desired_perf")
    public String getDesiredPerf() {
        return desiredPerf;
    }

    public void setDesiredPerf(String desiredPerf) {
        this.desiredPerf = desiredPerf;
    }

    @Basic
    @Column(name = "budget_factor")
    public String getAddtnlBudgetFator() {
        return addtnlBudgetFator;
    }

    public void setAddtnlBudgetFator(String addtnlBudgetFator) {
        this.addtnlBudgetFator = addtnlBudgetFator;
    }

    @Transient
    public int getInputCount() {
        return inputCount;
    }

    public void setInputCount(int inputCount) {
        this.inputCount = inputCount;
    }

    @Transient
    public String getMyInput() {
        return myInput;
    }

    public void setMyInput(String myInput) {
        this.myInput = myInput;
    }

 
    @Transient
    public String getTaskStatus() {
        return taskStatus;
    }

    public void setTaskStatus(String taskStatus) {
        this.taskStatus = taskStatus;
    }

    @Transient
    public String getInputReceived() {
        return inputReceived;
    }

    public void setInputReceived(String inputReceived) {
        this.inputReceived = inputReceived;
    }

    @Transient
    public String getFeedbackReceived() {
		return feedbackReceived;
	}

	public void setFeedbackReceived(String feedbackReceived) {
		this.feedbackReceived = feedbackReceived;
	}

	@Transient
	public int getFeedbackCount() {
		return feedbackCount;
	}

	public void setFeedbackCount(int feedbackCount) {
		this.feedbackCount = feedbackCount;
	}

	@PostLoad
    public final void postLoad() {
        
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TaskCatalogEntity that = (TaskCatalogEntity) o;
        return Objects.equals(taskId, that.taskId) &&
                Objects.equals(serviceName, that.serviceName) &&
                Objects.equals(program, that.program) &&
                Objects.equals(subProgram, that.subProgram) &&
                Objects.equals(taskCategory, that.taskCategory) &&
                Objects.equals(taskName, that.taskName) &&
                Objects.equals(taskDesc, that.taskDesc) &&
                Objects.equals(multDesc, that.multDesc) &&
                Objects.equals(frequency, that.frequency) &&
                Objects.equals(desiredPerf, that.desiredPerf) &&
                Objects.equals(addtnlBudgetFator, that.addtnlBudgetFator);
    }

    @Override
    public int hashCode() {
        return Objects.hash(taskId, serviceName, program, subProgram, taskCategory, taskName, taskDesc, multDesc, frequency,
                desiredPerf, addtnlBudgetFator );
    }

//    @ManyToOne
//    @JoinColumn(name = "stts_id", referencedColumnName = "stts_id")
//    public StatusEntity getStatusBySttsId() {
//        return statusBySttsId;
//    }
//
//    public void setStatusBySttsId(StatusEntity statusBySttsId) {
//        this.statusBySttsId = statusBySttsId;
//    }
}
