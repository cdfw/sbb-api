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
public class CurrentStateController {

    @Autowired
    private ServiceMatrixRepository repository ;
    
    @Autowired
    private TaskCatalogRepository taskRepository ;
    
    @Autowired
    private MissionInputRepository missionRepository ;
	
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

   
    @RequestMapping("/cslaborhours")
    public List<TaskCatalogEntity> fetchServiceMatrix() {      		
        List<TaskCatalogEntity> repo = (List<TaskCatalogEntity>) taskRepository.findAll();                
        return repo;
    }

}
