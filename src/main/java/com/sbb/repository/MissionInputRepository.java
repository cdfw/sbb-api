package com.sbb.repository;
import com.sbb.entity.MissionUserInputEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MissionInputRepository extends CrudRepository<MissionUserInputEntity, Integer> {
    @Query("SELECT input FROM MissionUserInputEntity input WHERE input.regionByRegionId.regionName = :regionId and input.taskId = :taskId")
    public List<MissionUserInputEntity> findInputsByRegionAndTask(@Param("regionId") String regionId, @Param("taskId") String taskId);
}
