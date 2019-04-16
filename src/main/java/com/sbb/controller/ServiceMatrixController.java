package com.sbb.controller;


import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import com.sbb.Greeting;
import com.sbb.entity.MissionUserInputEntity;
import com.sbb.entity.ServiceMatrixEntity;
import com.sbb.entity.TaskCatalogEntity;
import com.sbb.helper.AppConstants;
import com.sbb.repository.MissionInputRepository;
import com.sbb.repository.ServiceMatrixRepository;
import com.sbb.repository.TaskCatalogRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static java.util.stream.Collectors.toList;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


@RestController
public class ServiceMatrixController {

    @Autowired
    private ServiceMatrixRepository repository ;
    
    @Autowired
    private TaskCatalogRepository taskRepository ;
    
    @Autowired
    private MissionInputRepository missionRepository ;
	
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Greeting(counter.incrementAndGet(),
                String.format(template, name));
    }

    @RequestMapping("/service/{regionCode}/{userId}")
    public List<TaskCatalogEntity> fetchServiceMatrix(@PathVariable("regionCode")String regionCode, @PathVariable("userId")String userId) {  
    	DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
        List<TaskCatalogEntity> repo = (List<TaskCatalogEntity>) taskRepository.findAll();
        List<MissionUserInputEntity> inputRepo = (List<MissionUserInputEntity>)missionRepository.findAll();
        processMyInput(repo, inputRepo, userId, regionCode);
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
        setFeedbackCount(task, regionCode);
        return task;
    }


    public void processMyInput(List<TaskCatalogEntity> repo, List<MissionUserInputEntity> inputRepo, String userId, String regionCode) {
    	DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
        MissionUserInputEntity myInput = null;
        List<MissionUserInputEntity> allInputs = null;
        for(TaskCatalogEntity task : repo) {
      	int inputCount = 0;
        	int myInputCount = 0;
        	int feedbackCount = 0;
        	List <MissionUserInputEntity> regionInputs  = new ArrayList<MissionUserInputEntity>();
        	for(MissionUserInputEntity input :inputRepo) {           		
        		if (regionCode.equals(input.getRegionByRegionId().getRegionName()) && task.getTaskId().equals(input.getTaskId())) {
        			regionInputs.add(input);
        			inputCount++;
        			if(input.getFeedback() != null && !input.getFeedback().trim().isEmpty()) {
        				feedbackCount++;
        			}
        			if(Integer.parseInt(userId) == (input.getId())) {
        				myInputCount++;
        			}        			
        		}     		       		        		        		
        	}
        	if(myInputCount>0) {
        		task.setMyInput("Yes");
        	}  else {
        		task.setMyInput("No");
        	}    	  
        	if(inputCount > 0) {
        		task.setInputCount(inputCount);
        		task.setInputReceived("Yes");
        	} else {
        		task.setInputReceived("No");
        	}
        	
            if(feedbackCount>0) {
            	task.setFeedbackCount(feedbackCount);
                task.setFeedbackReceived("Yes");
            } else {
                task.setFeedbackReceived("No");
            }      	
            
            if(regionInputs.size() == 0 ) {
                task.setTaskStatus("Not started");
            } else {
                task.setTaskStatus("Pending");
                for (MissionUserInputEntity input : regionInputs) {
                    if(task.getTaskId().equals(input.getTaskId()) && AppConstants.STTS_APPROVED.equals(input.getSttsId())) {
                        task.setTaskStatus("Validated");
                        break;
                    }
                }
            }         
        	
          /*  myInput = task.getMissionUserInputsByTaskId().stream().filter(
                    input -> Integer.parseInt(userId) == (input.getId()) && regionCode.equals(input.getRegionByRegionId().getRegionName())).
                    findAny().orElse(null);
            if(null != myInput) {
                task.setMyInput("Yes");
            } else {
                task.setMyInput("No");
            } 
            System.out.println("Setting Input Count --> "+ dtf.format(LocalDateTime.now()));
            setInputCount(task, regionCode);
            System.out.println("Setting Status --> "+ dtf.format(LocalDateTime.now()));
            setTaskStatus(task,regionCode);
            System.out.println("Setting feedback count --> "+ dtf.format(LocalDateTime.now()));
            setFeedbackCount(task, regionCode);*/
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
    
    public void setFeedbackCount (ServiceMatrixEntity task, String regionCode) {
    	Predicate<MissionUserInputEntity> p = new Predicate<MissionUserInputEntity>() {

			@Override
			public boolean test(MissionUserInputEntity t) {
				return t.getFeedback() != null && !t.getFeedback().trim().isEmpty() && regionCode.equals(t.getRegionByRegionId().getRegionName());
			}
		};
		
        task.setFeedbackCount(task.getMissionUserInputsByTaskId().stream().filter(p)
        		.collect(Collectors.<MissionUserInputEntity>toList()).size());        
        if(task.getFeedbackCount()>0) {
            task.setFeedbackReceived("Yes");
        } else {
            task.setFeedbackReceived("No");
        }
    }   
}
