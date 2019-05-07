package com.sbb.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.sbb.entity.CSUserLaborClassInputEntity;
import com.sbb.model.CSUserLaborClassInputEntityModel;

public interface CSUserLaborClassInputRepository extends CrudRepository<CSUserLaborClassInputEntity, Integer>{
	
	@Query("SELECT lc from CSUserLaborClassInputEntity lc where lc.userId = :userId and lc.regionId = :regionId and lc.positionId = :positionId")
    public List<CSUserLaborClassInputEntity> findAllByIdAndRegionIdAndPositionId(@Param("userId") int userId, @Param("regionId") int regionId, @Param("positionId")String positionId);
	
	@Query("SELECT lc from CSUserLaborClassInputEntity lc where lc.regionId = :regionId and lc.positionId = :positionId")
    public List<CSUserLaborClassInputEntity> findAllByRegionIdAndPositionId(@Param("regionId") int regionId, @Param("positionId")String positionId);

	@Modifying
	@Transactional
	@Query("UPDATE CSUserLaborClassInputEntity lc SET inputHours = :inputHours, feedback = :feedback where lc.userId = :userId and lc.regionId = :regionId and lc.positionId = :positionId and lc.taskId = :taskId")
    public void editCsInput(
    		@Param("userId") int userId, 
    		@Param("regionId") int regionId, 
    		@Param("positionId")String positionId, 
    		@Param("taskId")String taskId,
    		@Param("inputHours")BigDecimal inputHours,
    		@Param("feedback") String feedback);
	
	@Modifying
	@Transactional
	@Query("DELETE FROM CSUserLaborClassInputEntity lc where lc.userId = :userId and lc.regionId = :regionId and lc.positionId = :positionId and lc.taskId = :taskId")
    public void deleteCsInput(
    		@Param("userId") int userId, 
    		@Param("regionId") int regionId, 
    		@Param("positionId")String positionId, 
    		@Param("taskId")String taskId
    		);

	@Query("SELECT new com.sbb.model.CSUserLaborClassInputEntityModel(lc.positionId, SUM(lc.inputHours) as hoursEntered) from CSUserLaborClassInputEntity lc "
			+ " where lc.regionId = :regionId"
			+ " group by lc.positionId")
	public List<CSUserLaborClassInputEntityModel> findAllByRegionId(int regionId);


}
