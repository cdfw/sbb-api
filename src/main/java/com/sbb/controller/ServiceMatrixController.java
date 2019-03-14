package com.sbb.controller;


import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

import com.sbb.Greeting;
import com.sbb.entity.MissionUserInputEntity;
import com.sbb.entity.ServiceMatrixEntity;
import com.sbb.helper.AppConstants;
import com.sbb.repository.ServiceMatrixRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static java.util.stream.Collectors.toList;


@RestController
public class ServiceMatrixController {

    @Autowired
    private ServiceMatrixRepository repository ;

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Greeting(counter.incrementAndGet(),
                String.format(template, name));
    }

    @RequestMapping("/service/{regionCode}/{userId}")
    public List<ServiceMatrixEntity> fetchServiceMatrix(@PathVariable("regionCode")String regionCode, @PathVariable("userId")String userId) {
        System.out.println(regionCode);
        List<ServiceMatrixEntity> repo = (List<ServiceMatrixEntity>) repository.findAll();
        processMyInput(repo, userId, regionCode);
        return repo;
    }

    @RequestMapping("/{regionCode}/task/{taskId}")
    public ServiceMatrixEntity fetchTaskInfo(@PathVariable("regionCode")String regionCode, @PathVariable("taskId")String taskId) {
        // repository.
        ServiceMatrixEntity task =  repository.findById(taskId);
       /* task.setMissionUserInputsByTaskId(task.getMissionUserInputsByTaskId().stream().filter(
                input -> regionCode.equals(input.getRegionByRegionId().getRegionName())).
                collect(Collectors.toCollection(LinkedList<MissionUserInputEntity>::new))); */
        setInputCount(task, regionCode);
        setTaskStatus(task, regionCode);
        return task;
    }


    public void processMyInput(List<ServiceMatrixEntity> repo, String userId, String regionCode) {
        MissionUserInputEntity myInput = null;
        List<MissionUserInputEntity> allInputs = null;
        for(ServiceMatrixEntity task : repo) {
            myInput = task.getMissionUserInputsByTaskId().stream().filter(
                    input -> Integer.parseInt(userId) == (input.getId()) && regionCode.equals(input.getRegionByRegionId().getRegionName())).
                    findAny().orElse(null);
            if(null != myInput) {
                task.setMyInput("Yes");
            } else {
                task.setMyInput("No");
            }
            setInputCount(task, regionCode);
            setTaskStatus(task,regionCode);
        }
    }


    public void setTaskStatus(ServiceMatrixEntity task, String regionCode) {
        LinkedList<MissionUserInputEntity> regionInputs =task.getMissionUserInputsByTaskId().stream().filter( input -> regionCode.equals(input.getRegionByRegionId().getRegionName())).
                collect(Collectors.toCollection(LinkedList<MissionUserInputEntity>::new));
        if(regionInputs.size() == 0 ) {
            task.setTaskStatus("Not started");
        } else {
            task.setTaskStatus("Pending");
            for (MissionUserInputEntity input : regionInputs) {
                if(AppConstants.STTS_APPROVED.equals(input.getSttsId())) {
                    task.setTaskStatus("Validated");
                    break;
                }
            }
        }

    }

    public void setInputCount (ServiceMatrixEntity task, String regionCode) {
        task.setInputCount(task.getMissionUserInputsByTaskId().stream().filter(
                input -> regionCode.equals(input.getRegionByRegionId().getRegionName())
        ).collect(Collectors.toCollection(LinkedList<MissionUserInputEntity>::new)).size());
        if(task.getInputCount()>0) {
            task.setInputReceived("Yes");
        } else {
            task.setInputReceived("No");
        }
    }
}
