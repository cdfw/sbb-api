package com.sbb.controller;

import com.sbb.entity.UserEntity;
import com.sbb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class UserController {

    @Autowired
    private UserRepository repository ;

    @RequestMapping(path = "/authenticateUser", method = RequestMethod.POST)
    public UserEntity authenticateUser(@RequestBody Map<String, String> request) {
        System.out.println("Inside authenticate user "+request);
        UserEntity user = repository.findByUserName(request.get("username"), request.get("password"));
        System.out.println("Inside authenticate user "+user);
        return user;
   }
}
