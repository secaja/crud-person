package com.payroll.person;
import  javax.persistence.*;

@Entity
@Table(name="person")
public class Person {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String names;

    @Column
    private String lastnames;

    public Long getId() {
      return id;
    }

    public void setId(Long id) {
      this.id = id;
    }

    public String getNames() {
      return names;
    }

    public void setNames(String names) {
      this.names = names;
    }

    public String getLastnames() {
      return lastnames;
    }

    public void setLastnames(String lastnames) {
      this.lastnames = lastnames;
    }
  }
