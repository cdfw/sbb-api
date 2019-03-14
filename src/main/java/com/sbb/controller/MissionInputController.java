package com.sbb.controller;

import com.sbb.entity.MissionUserInputEntity;
import com.sbb.entity.ServiceMatrixEntity;
import com.sbb.entity.UserEntity;
import com.sbb.entity.UserRegionMappingEntity;
import com.sbb.helper.AppConstants;
import com.sbb.repository.MissionInputRepository;
import com.sbb.repository.ServiceMatrixRepository;
import com.sbb.repository.StatusRepository;
import com.sbb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@RestController
public class MissionInputController {

    @Autowired
    private MissionInputRepository repository ;
    @Autowired
    private ServiceMatrixRepository serviceRepository ;
    @Autowired
    private UserRepository userRepository ;
    @Autowired
    private StatusRepository statusRepository;

    @RequestMapping(path = "/findInputs", method = RequestMethod.GET)
    public List<MissionUserInputEntity> findInputs() {
        List<MissionUserInputEntity> inputList = (List<MissionUserInputEntity>)repository.findAll();     
        return inputList;
   }

    @RequestMapping(path = "/fetchInputs/{regionId}/{taskId}", method = RequestMethod.GET)
    public List<MissionUserInputEntity> fetchInputs(@PathVariable("regionId")int regionId, @PathVariable("taskId")String taskId) {
        List<MissionUserInputEntity> inputList = (List<MissionUserInputEntity>)repository.findInputsByRegionAndTask(regionId, taskId);        
        return inputList;
    }

    @RequestMapping(path = "/selectInput/{regionId}/{taskId}/{userId}/{approvedUserId}", method = RequestMethod.GET)
    public int selectInput(@PathVariable("regionId")int regionId, @PathVariable("taskId")String taskId, @PathVariable("userId")int userId,  @PathVariable("approvedUserId")Integer approvedUserId) {
        UserEntity user = userRepository.findById(userId).get();
        int approvedInp = approveSelectedAndRejectOthers(user, regionId, taskId, userId, approvedUserId);
        System.out.println(new Timestamp(System.currentTimeMillis()) + "------" +userId+"'s Input for region "+ regionId+ " and taskid " + taskId +  " has been validated by " + approvedUserId);
        return approvedInp;
 
    }


    @RequestMapping(path = "/saveInput", method = RequestMethod.POST)
    public MissionUserInputEntity saveInput(@RequestBody Map<String, String> request) {
        int regionId =0;
        UserEntity user = userRepository.findById(Integer.parseInt(request.get("userId"))).get();
        regionId =getRegionIdFromUser(user,request);
        MissionUserInputEntity inputEntity = new MissionUserInputEntity();
        ServiceMatrixEntity matrix = serviceRepository.findById(request.get("taskId"));
        if(AppConstants.ADMIN.equals(user.getUserRoleByRoleId().getRoleName()) || AppConstants.MISSION_LEAD.equals(user.getUserRoleByRoleId().getRoleName())) {
            mapUserInputToEntity(request, inputEntity, regionId, AppConstants.STTS_APPROVED);
            //matrix.setStatusBySttsId(statusRepository.findById(AppConstants.STTS_APPROVED));
            repository.rejectUnselectedInputs(regionId, request.get("taskId"),Integer.parseInt(request.get("userId")));
        } else if(AppConstants.MISSION_RESP.equals(user.getUserRoleByRoleId().getRoleName())) {
            mapUserInputToEntity(request, inputEntity, regionId, AppConstants.STTS_PENDING);
            //matrix.setStatusBySttsId(statusRepository.findById(AppConstants.STTS_PENDING));
        }
        MissionUserInputEntity savedInput = repository.save(inputEntity);
        serviceRepository.save(matrix);
        System.out.println(new Timestamp(System.currentTimeMillis()) + "---- Region-->" + inputEntity.getRegionId() + " Task Id -->" + inputEntity.getTaskId()+ " User Id --> " + inputEntity.getId() + " Input Value -->"+ inputEntity.getInputValue());
        return savedInput;
    }

    private MissionUserInputEntity mapUserInputToEntity(  Map<String, String> request, MissionUserInputEntity input, int regionId, String status ){
        input.setId(Integer.parseInt(request.get("userId")));
        input.setRegionId(regionId);
        input.setTaskId((request.get("taskId")));
        input.setInputValue(Integer.parseInt(request.get("inputValue")));
        input.setSttsId(status);
        if(AppConstants.STTS_APPROVED.equalsIgnoreCase(status)) {
        	input.setApproverId(Integer.parseInt(request.get("userId")));
        } else {
        	
        }
        return  input;
    }


    private int getRegionIdFromUser(UserEntity user, Map<String, String> request) {
        Iterator iterator =  user.getUserRegionMappingsById().iterator();
        while(iterator.hasNext()) {
            UserRegionMappingEntity regionmMapping = (UserRegionMappingEntity)iterator.next();
            if ( (request.get("regionName")).equals(
                    regionmMapping.getRegionByRegionId().getRegionName() )){
                return regionmMapping.getRegionByRegionId().getRegionId();
            }
        }
       return 0;
    }

    // region and task to be added
    private int approveSelectedAndRejectOthers(UserEntity user, int regionId, String taskId , int userId, int approvedUserId){
       Iterator inputs = user.getMissionUserInputsById().iterator();
       int approvedInput = 0;
        while(inputs.hasNext()) {
            MissionUserInputEntity input = (MissionUserInputEntity)inputs.next();
            if ( userId == input.getId() && regionId == input.getRegionId() && taskId.equals(input.getTaskId())) {
                approvedInput = input.getInputValue();
                //if (!AppConstants.STTS_APPROVED.equals(input.getSttsId())) {
                    input.setSttsId(AppConstants.STTS_APPROVED);
                    input.setApproverId(approvedUserId);
                    repository.save(input);

                  //  ServiceMatrixEntity matrix = serviceRepository.findById(taskId);
                  //  matrix.setStatusBySttsId(statusRepository.findById(AppConstants.STTS_APPROVED));
                  //  serviceRepository.save(matrix);
                
            }
            repository.rejectUnselectedInputs(regionId, taskId,userId);
        }
        return approvedInput;
    }
}
