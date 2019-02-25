package com.sbb.repository;

import com.sbb.entity.StatusEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface StatusRepository extends CrudRepository<StatusEntity, Integer> {

    @Query("SELECT stts FROM StatusEntity stts WHERE sttsId = :sttsId")
    public StatusEntity findById(@Param("sttsId") String sttsId);

}
