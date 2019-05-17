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
    private String desiredPerf;
    private String addtnlBudgetFator;
    private String serviceGlossary;

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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((addtnlBudgetFator == null) ? 0 : addtnlBudgetFator.hashCode());
		result = prime * result + ((desiredPerf == null) ? 0 : desiredPerf.hashCode());
		result = prime * result + ((program == null) ? 0 : program.hashCode());
		result = prime * result + ((serviceGlossary == null) ? 0 : serviceGlossary.hashCode());
		result = prime * result + ((serviceName == null) ? 0 : serviceName.hashCode());
		result = prime * result + ((subProgram == null) ? 0 : subProgram.hashCode());
		result = prime * result + ((taskCategory == null) ? 0 : taskCategory.hashCode());
		result = prime * result + ((taskDesc == null) ? 0 : taskDesc.hashCode());
		result = prime * result + ((taskId == null) ? 0 : taskId.hashCode());
		result = prime * result + ((taskName == null) ? 0 : taskName.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ServiceMatrixEntityBasic other = (ServiceMatrixEntityBasic) obj;
		if (addtnlBudgetFator == null) {
			if (other.addtnlBudgetFator != null)
				return false;
		} else if (!addtnlBudgetFator.equals(other.addtnlBudgetFator))
			return false;
		if (desiredPerf == null) {
			if (other.desiredPerf != null)
				return false;
		} else if (!desiredPerf.equals(other.desiredPerf))
			return false;
		if (program == null) {
			if (other.program != null)
				return false;
		} else if (!program.equals(other.program))
			return false;
		if (serviceGlossary == null) {
			if (other.serviceGlossary != null)
				return false;
		} else if (!serviceGlossary.equals(other.serviceGlossary))
			return false;
		if (serviceName == null) {
			if (other.serviceName != null)
				return false;
		} else if (!serviceName.equals(other.serviceName))
			return false;
		if (subProgram == null) {
			if (other.subProgram != null)
				return false;
		} else if (!subProgram.equals(other.subProgram))
			return false;
		if (taskCategory == null) {
			if (other.taskCategory != null)
				return false;
		} else if (!taskCategory.equals(other.taskCategory))
			return false;
		if (taskDesc == null) {
			if (other.taskDesc != null)
				return false;
		} else if (!taskDesc.equals(other.taskDesc))
			return false;
		if (taskId == null) {
			if (other.taskId != null)
				return false;
		} else if (!taskId.equals(other.taskId))
			return false;
		if (taskName == null) {
			if (other.taskName != null)
				return false;
		} else if (!taskName.equals(other.taskName))
			return false;
		return true;
	}

}
