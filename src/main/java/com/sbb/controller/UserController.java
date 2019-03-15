package com.sbb.controller;

import com.sbb.entity.UserEntity;
import com.sbb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.UUID;

@RestController
public class UserController {

    @Autowired
    private UserRepository repository ;

    @RequestMapping(path = "/authenticateUser", method = RequestMethod.POST)
    public UserEntity authenticateUser(@RequestBody Map<String, String> request) {
        UserEntity user = repository.findByCredentials(request.get("username"), request.get("password"));
        if (null != user) {
            processUser(user);
        }
        return user;
   }
    
    @RequestMapping(path = "/resetPassword", method = RequestMethod.POST)
    public UserEntity resetPassword(@RequestBody Map<String, String> request) {
        UserEntity user = repository.findByCredentials(request.get("username"), request.get("password"));
        if (null != user) {
        	user.setPassword(request.get("newpassword"));
        	repository.save(user);
        }
        return user;
   }

    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public void logoutUser(@RequestBody Map<String, Integer> request) {
        System.out.println("Inside logout "+request.get("userId"));
        UserEntity user = repository.findById(request.get("userId")).get();
        user.setUserToken(null);
        repository.save(user);
    }


   public void processUser(UserEntity user){
        user.setUserToken(generateToken());
        repository.save(user);
        user.setPassword("");
   }

   public String generateToken(){
       UUID uuid = UUID.randomUUID();
       String randomUUIDString = uuid.toString();
       return randomUUIDString;
   }


}
