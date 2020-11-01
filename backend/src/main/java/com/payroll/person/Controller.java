package com.payroll.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping({"/persons"})

public class Controller {

  @Autowired
  PersonService service;

  @GetMapping
  public List<Person> getAll(){
    return service.getAll();
  }

  @PostMapping
  public Person save(@RequestBody Person person){
    return service.add(person);
  }

}
