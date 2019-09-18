package com.sbb.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "labor_class_lookup")
public class LaborClassLookupEntity {
    private String role ;
    private String title;   
   /* @JsonIgnore
    private Collection<LaborClassEntity> laborClassByRoleId;*/
    
    @Id
    @Column(name = "role")
    public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Basic
	@Column(name = "title")
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
 
	


	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LaborClassLookupEntity that = (LaborClassLookupEntity) o;
        return role == that.role &&
                Objects.equals(title, that.title);
    }

	/*@OneToMany(mappedBy = "laborClassLookupByRoleId")  
	public Collection<LaborClassEntity> getLaborClassByRoleId() {
		return laborClassByRoleId;
	}

	public void setLaborClassByRoleId(Collection<LaborClassEntity> laborClassByRoleId) {
		this.laborClassByRoleId = laborClassByRoleId;
	}*/

}
