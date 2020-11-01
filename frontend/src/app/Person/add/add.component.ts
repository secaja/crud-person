import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/Model/person';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public person: Person;

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.person = new Person();
  }

  save(): void  {
    this.service.createPerson(this.person)
      .subscribe(data => {
        alert('Agregado exitosamente');
        this.router.navigate(['to-list']);
      });
  }

}
