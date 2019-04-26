package com.sbb.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.sbb.entity.CSUserLaborClassInputEntity;

public interface CSUserLaborClassInputRepository extends CrudRepository<CSUserLaborClassInputEntity, Integer>{
	
	@Query("SELECT lc from CSUserLaborClassInputEntity lc where lc.userId = :userId and lc.regionId = :regionId and lc.positionId = :positionId")
    public List<CSUserLaborClassInputEntity> findAllByIdAndRegionIdAndLaborClass(@Param("userId") int userId, @Param("regionId") int regionId, @Param("positionId")String positionId);

	@Modifying
	@Transactional
	@Query("UPDATE CSUserLaborClassInputEntity lc SET inputHours = :inputHours where lc.userId = :userId and lc.regionId = :regionId and lc.positionId = :positionId and lc.taskId = :taskId")
    public void editCsInput(
    		@Param("userId") int userId, 
    		@Param("regionId") int regionId, 
    		@Param("positionId")String positionId, 
    		@Param("taskId")String taskId,
    		@Param("inputHours")BigDecimal inputHours);
	
	@Modifying
	@Transactional
	@Query("DELETE FROM CSUserLaborClassInputEntity lc where lc.userId = :userId and lc.regionId = :regionId and lc.positionId = :positionId and lc.taskId = :taskId")
    public void deleteCsInput(
    		@Param("userId") int userId, 
    		@Param("regionId") int regionId, 
    		@Param("positionId")String positionId, 
    		@Param("taskId")String taskId
    		);


}
