package com.payroll.person;

import java.util.List;

public interface PersonService {

  List<Person> getAll();

  Person getById(long id);

  Person add(Person p);

  Person edit(Person p);

  Person delete(int id);

}
