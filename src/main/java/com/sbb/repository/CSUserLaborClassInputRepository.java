package com.sbb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.sbb.entity.CSUserLaborClassInputEntity;

public interface CSUserLaborClassInputRepository extends CrudRepository<CSUserLaborClassInputEntity, Integer>{
	
	@Query("SELECT lc from CSUserLaborClassInputEntity lc where lc.userId = :userId and lc.regionId = :regionId and lc.positionId = :positionId")
    public List<CSUserLaborClassInputEntity> findAllByIdAndRegionIdAndLaborClass(@Param("userId") int userId, @Param("regionId") int regionId, @Param("positionId")String positionId);

}
