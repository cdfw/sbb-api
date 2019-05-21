package com.sbb.controller;


import java.math.BigDecimal;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sbb.entity.CSUserLaborClassInputEntity;
import com.sbb.entity.CSUserLaborClassMappingEntity;
import com.sbb.entity.TaskCatalogEntity;
import com.sbb.model.CSUserLaborClassInputEntityModel;
import com.sbb.repository.CSUserLaborClassInputRepository;
import com.sbb.repository.CurrentStateRepository;
import com.sbb.repository.TaskCatalogRepository;


@RestController
public class CurrentStateController {
    
    @Autowired
    private TaskCatalogRepository taskRepository ;
    
    @Autowired
    private CurrentStateRepository currentStateRepository;
    
    @Autowired
    private CSUserLaborClassInputRepository csUserLaborClassInputRepository;
    
    @RequestMapping("/csservice/{regionCode}/{userId}")
    public List<CSUserLaborClassMappingEntity> fetchLaborClasses(@PathVariable("regionCode")int regionCode, @PathVariable("userId")int userId) {  
    	DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
    	System.out.println("Fetching Labor Classes --> "+ dtf.format(LocalDateTime.now()));
        List<CSUserLaborClassMappingEntity> repo = (List<CSUserLaborClassMappingEntity>) currentStateRepository.findAllByIdAndRegionId(userId, regionCode);
        List<CSUserLaborClassInputEntityModel> inputs = csUserLaborClassInputRepository.findAllByRegionId(regionCode);
        
        Map<String, BigDecimal> inputPositionMap = inputs.stream()
                .collect(Collectors.toMap(CSUserLaborClassInputEntityModel::getPositionId, CSUserLaborClassInputEntityModel::getHoursEntered));
        
        for(CSUserLaborClassMappingEntity e: repo) {
        	e.setHoursEntered(inputPositionMap.get(e.getPositionId()));
        }
        
        System.out.println("Done with Labor Classes --> "+ dtf.format(LocalDateTime.now()));
        return repo;
    }
    
    @RequestMapping("/csservice/laborclasssummary/{regionCode}/{userId}/{positionId}")
    public List<CSUserLaborClassInputEntity> fetchLaborClassHoursSummaryByUser(@PathVariable("regionCode")int regionCode, @PathVariable("userId")int userId, @PathVariable("positionId")String positionId) {  
    	DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
    	System.out.println("Fetching Labor Class Summary --> "+ dtf.format(LocalDateTime.now()));
        List<CSUserLaborClassInputEntity> repo = (List<CSUserLaborClassInputEntity>) csUserLaborClassInputRepository.findAllByIdAndRegionIdAndPositionId(userId, regionCode, positionId);
        System.out.println("Done with Labor Class Summary --> "+ dtf.format(LocalDateTime.now()));
        return repo;
    }
    
    @RequestMapping("/csservice/laborclasssummary/{regionCode}/{positionId}")
    public List<CSUserLaborClassInputEntity> fetchLaborClassHoursSummary(@PathVariable("regionCode")int regionCode, @PathVariable("positionId")String positionId) {  
    	DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
    	System.out.println("Fetching Labor Class Summary --> "+ dtf.format(LocalDateTime.now()));
        List<CSUserLaborClassInputEntity> repo = (List<CSUserLaborClassInputEntity>) csUserLaborClassInputRepository.findAllByRegionIdAndPositionId(regionCode, positionId);
        System.out.println("Done with Labor Class Summary --> "+ dtf.format(LocalDateTime.now()));
        return repo;
    }
   
    @RequestMapping("/cslaborhours")
    public List<TaskCatalogEntity> fetchServiceMatrix() {      		
        List<TaskCatalogEntity> repo = (List<TaskCatalogEntity>) taskRepository.findActiveTasks();                
        return repo;
    }
    
    @RequestMapping(path = "/addCsInput", method = RequestMethod.POST)
    public CSUserLaborClassInputEntity addCsInput(@RequestBody Map<String, String> request) {  
    	CSUserLaborClassInputEntity classInputEntity = new CSUserLaborClassInputEntity();
    	classInputEntity.setRegionId(Integer.parseInt(request.get("regionId")));
    	classInputEntity.setUserId(Integer.parseInt(request.get("userId")));
    	classInputEntity.setPositionId(request.get("positionId"));
    	classInputEntity.setTaskId(request.get("taskId"));
    	classInputEntity.setInputHours(new BigDecimal(request.get("inputHours")));
    	classInputEntity.setFeedback(request.get("feedback"));
    	classInputEntity.setSttsId("P");
    	classInputEntity.setCreatedDtm(new Timestamp(System.currentTimeMillis()));
    	classInputEntity.setUpdtdDtm(new Timestamp(System.currentTimeMillis()));
    	CSUserLaborClassInputEntity savedEntitiy = csUserLaborClassInputRepository.save(classInputEntity);         
        return savedEntitiy;
    }
    
    @RequestMapping(path = "/editCsInput", method = RequestMethod.POST)
    public boolean editCsInput(@RequestBody Map<String, Object> request) {     
        csUserLaborClassInputRepository.editCsInput(Integer.parseInt(request.get("userId").toString()), Integer.parseInt(request.get("regionId").toString()), request.get("positionId").toString(), request.get("taskId").toString(), new BigDecimal(request.get("inputHours").toString()), request.get("feedback").toString(), Integer.parseInt(request.get("editedBy").toString()));                
        return true;
    }
    
    @RequestMapping(path = "/deleteCsInput", method = RequestMethod.POST)
    public boolean deleteCsInput(@RequestBody Map<String, Object> request) {      		
    	csUserLaborClassInputRepository.deleteCsInput(Integer.parseInt(request.get("userId").toString()), Integer.parseInt(request.get("regionId").toString()), request.get("positionId").toString(), request.get("taskId").toString());                
        return true;
    }
    
    @RequestMapping(path = "/approveCsInput", method = RequestMethod.POST)
    public boolean approveCsInput(@RequestBody Map<String, Object> request) {     
        csUserLaborClassInputRepository.approveCsInput(Integer.parseInt(request.get("userId").toString()), Integer.parseInt(request.get("regionId").toString()), request.get("positionId").toString(), request.get("taskId").toString(), Integer.parseInt(request.get("approverId").toString()));
       // csUserLaborClassInputRepository.rejectCsInputs(Integer.parseInt(request.get("userId").toString()), Integer.parseInt(request.get("regionId").toString()), request.get("positionId").toString(), request.get("taskId").toString());
        return true;
    }

}
