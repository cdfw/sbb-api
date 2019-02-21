package com.sbb.controller;


import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import com.sbb.Greeting;
import com.sbb.entity.ServiceMatrixEntity;
import com.sbb.repository.ServiceMatrixRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


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

    @RequestMapping("/service/{regionCode}")
    public Object[] fetchServiceMatrix(@PathVariable("regionCode")String regionCode) {
        // repository.
        System.out.println(regionCode);
        List<ServiceMatrixEntity> repo = (List<ServiceMatrixEntity>) repository.findAll();
        return repo.toArray();
    }
}
