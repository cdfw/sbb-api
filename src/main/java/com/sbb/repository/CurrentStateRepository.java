package com.sbb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.sbb.entity.CSUserLaborClassMappingEntity;

public interface CurrentStateRepository extends CrudRepository<CSUserLaborClassMappingEntity, Integer> {

    @Query("SELECT lc from CSUserLaborClassMappingEntity lc where lc.userId = :userId and lc.regionId = :regionId")
    public List<CSUserLaborClassMappingEntity> findAllByIdAndRegionId(@Param("userId") int userId, @Param("regionId") int regionId);

}
