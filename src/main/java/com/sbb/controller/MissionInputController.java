package com.sbb.controller;

import com.sbb.entity.MissionUserInputEntity;
import com.sbb.entity.UserEntity;
import com.sbb.repository.MissionInputRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Map;


@RestController
public class MissionInputController {

    @Autowired
    private MissionInputRepository repository ;

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

    @RequestMapping(path = "/saveInput", method = RequestMethod.POST)
    public MissionUserInputEntity saveInput(@RequestBody Map<String, String> request) {
        System.out.println("Inside save Inputs -- before saving ");
        MissionUserInputEntity input = new MissionUserInputEntity();
        mapUserInputToEntity(request, input);
        MissionUserInputEntity savedInput = repository.save(input);
        System.out.println("Inside save Inputs - saved");
        return savedInput;
    }

    private MissionUserInputEntity mapUserInputToEntity(  Map<String, String> request, MissionUserInputEntity input ){
        input.setId(Integer.parseInt(request.get("userId")));
        input.setRegionId(Integer.parseInt(request.get("regionId")));
        input.setTaskId((request.get("taskId")));
        input.setInputValue(Integer.parseInt(request.get("inputValue")));
        input.setSttsId(request.get("sttsCd"));
        return  input;
    }
}
