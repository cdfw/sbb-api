package com.sbb.repository;

import com.sbb.entity.ServiceMatrixEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface ServiceMatrixRepository extends CrudRepository<ServiceMatrixEntity, Integer> {

    @Query("SELECT task from ServiceMatrixEntity task where task.taskId = :taskId")
    public ServiceMatrixEntity findById(@Param("taskId") String taskId);

}
