package com.sbb.repository;

import com.sbb.entity.ServiceMatrixEntity;
import com.sbb.entity.TaskCatalogEntity;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface TaskCatalogRepository extends CrudRepository<TaskCatalogEntity, Integer> {

    @Query("SELECT task from TaskCatalogEntity task where task.activeInd = 'Y'")
    public List<TaskCatalogEntity> findActiveTasks();
	
}
