package com.payroll.person;

import org.springframework.data.repository.Repository;

import java.util.List;

public interface PersonRepository extends Repository <Person, Integer> {

  List<Person> findAll();

  Person findById(long id);

  Person save(Person p);

  void delete(Person p);

}
