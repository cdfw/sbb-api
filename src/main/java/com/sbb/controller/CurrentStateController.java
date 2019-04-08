package com.sbb.controller;


import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sbb.entity.CSUserLaborClassMappingEntity;
import com.sbb.entity.TaskCatalogEntity;
import com.sbb.repository.CurrentStateRepository;
import com.sbb.repository.MissionInputRepository;
import com.sbb.repository.ServiceMatrixRepository;
import com.sbb.repository.TaskCatalogRepository;


@RestController
public class CurrentStateController {

    @Autowired
    private ServiceMatrixRepository repository ;
    
    @Autowired
    private TaskCatalogRepository taskRepository ;
    
    @Autowired
    private MissionInputRepository missionRepository ;
    
    @Autowired
    private CurrentStateRepository currentStateRepository;
	
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    
    @RequestMapping("/csservice/{regionCode}/{userId}")
    public List<CSUserLaborClassMappingEntity> fetchLaborClasses(@PathVariable("regionCode")int regionCode, @PathVariable("userId")int userId) {  
    	DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
    	System.out.println("Fetching Labor Classes --> "+ dtf.format(LocalDateTime.now()));
        List<CSUserLaborClassMappingEntity> repo = (List<CSUserLaborClassMappingEntity>) currentStateRepository.findAllByIdAndRegionId(userId, regionCode);
        System.out.println("Done with Labor Classes --> "+ dtf.format(LocalDateTime.now()));
        return repo;
    }
   
    @RequestMapping("/cslaborhours")
    public List<TaskCatalogEntity> fetchServiceMatrix() {      		
        List<TaskCatalogEntity> repo = (List<TaskCatalogEntity>) taskRepository.findAll();                
        return repo;
    }

}
