package com.payroll.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class PersonServiceImp implements PersonService{

  @Autowired
  private PersonRepository repository;

  @Override
  public List<Person> getAll() {
    return repository.findAll();
  }

  @Override
  public Person getById(long id) {
    return repository.findById(id);
  }

  @Override
  public Person add(Person p) {
    return repository.save(p);
  }

  @Override
  public Person edit(Person p) {
    return null;
  }

  @Override
  public Person delete(int id) {
    return null;
  }
}
