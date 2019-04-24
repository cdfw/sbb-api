package com.sbb.repository;
import com.sbb.entity.MissionUserInputEntity;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface MissionInputRepository extends CrudRepository<MissionUserInputEntity, Integer> {
    @Query("SELECT input FROM MissionUserInputEntity input WHERE input.regionId = :regionId and input.taskId = :taskId")
    public List<MissionUserInputEntity> findInputsByRegionAndTask(@Param("regionId") int regionId, @Param("taskId") String taskId);


    @Modifying
    @Transactional
    @Query("UPDATE MissionUserInputEntity SET sttsId = 'R', approverId = null, updtdDtm = current_timestamp WHERE taskId = :taskId and id <> :userId and regionId = :regionId")
    public void rejectUnselectedInputs( @Param("regionId") int regionId, @Param("taskId") String taskId, @Param("userId") int userId);

    //WHERE input.regionByRegionId.regionName = :regionId and input.taskId = :taskId and input.id <> :userId

}
