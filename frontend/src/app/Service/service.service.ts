import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../Model/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/crud-person/persons';

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }

  createPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.url, person);
  }
}
