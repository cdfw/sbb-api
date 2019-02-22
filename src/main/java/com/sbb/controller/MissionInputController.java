package com.sbb.controller;

import com.sbb.entity.MissionUserInputEntity;
import com.sbb.entity.UserEntity;
import com.sbb.entity.UserRegionMappingEntity;
import com.sbb.helper.AppConstants;
import com.sbb.repository.MissionInputRepository;
import com.sbb.repository.ServiceMatrixRepository;
import com.sbb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@RestController
public class MissionInputController {

    @Autowired
    private MissionInputRepository repository ;
    @Autowired
    private ServiceMatrixRepository serviceRepository ;
    @Autowired
    private UserRepository userRepository ;

    @RequestMapping(path = "/fetchInputs", method = RequestMethod.GET)
    public List<MissionUserInputEntity> fetchInputs() {
        System.out.println("Inside fetchInputs");
        List<MissionUserInputEntity> inputList = (List<MissionUserInputEntity>)repository.findAll();
        System.out.println("Input user details are "+inputList);
        return inputList;
   }

    @RequestMapping(path = "/findInputs", method = RequestMethod.GET)
    public List<MissionUserInputEntity> findInputs() {
        System.out.println("Inside input");
        List<MissionUserInputEntity> inputList = (List<MissionUserInputEntity>)repository.findInputsByRegionAndTask("marine", "1");
        return inputList;
    }

    @RequestMapping(path = "/selectInput", method = RequestMethod.GET)
    public List<MissionUserInputEntity> selectInput(@PathVariable("userId")String userId) {
        System.out.println("Inside input");
        UserEntity user = userRepository.findById(Integer.parseInt(userId)).get();
        List<MissionUserInputEntity> inputList = (List<MissionUserInputEntity>)repository.findInputsByRegionAndTask("marine", "1");
        return inputList;
    }


    @RequestMapping(path = "/saveInput", method = RequestMethod.POST)
    public MissionUserInputEntity saveInput(@RequestBody Map<String, String> request) {
        int regionId =0;
        UserEntity user = userRepository.findById(Integer.parseInt(request.get("userId"))).get();
        regionId =getRegionIdFromUser(user,request);
        /*if(AppConstants.ADMIN.equals(user.getUserRoleByRoleId().getRoleName()) || AppConstants.MISSION_LEAD.equals(user.getUserRoleByRoleId().getRoleName())) {

        } else if(AppConstants.MISSION_RESP.equals(user.getUserRoleByRoleId().getRoleName())){


        }*/

        System.out.println("Inside save Inputs -- before saving ");
        MissionUserInputEntity inputEntity = new MissionUserInputEntity();
        mapUserInputToEntity(request, inputEntity, regionId);
        MissionUserInputEntity savedInput = repository.save(inputEntity);
        System.out.println("Inside save Inputs - saved");
        return savedInput;
    }

    private MissionUserInputEntity mapUserInputToEntity(  Map<String, String> request, MissionUserInputEntity input, int regionId ){
        input.setId(Integer.parseInt(request.get("userId")));
        input.setRegionId(regionId);
        input.setTaskId((request.get("taskId")));
        input.setInputValue(Integer.parseInt(request.get("inputValue")));
        input.setSttsId(request.get("sttsCd"));
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
}
