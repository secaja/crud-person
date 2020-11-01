import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Person } from 'src/app/Model/person';

@Component({
  selector: 'app-to-list',
  templateUrl: './to-list.component.html',
  styleUrls: ['./to-list.component.css']
})

export class ToListComponent implements OnInit {

  persons: Person[];

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPersons()
      .subscribe((persons: Person[]) => {
        this.persons = persons;
      });
  }

}
