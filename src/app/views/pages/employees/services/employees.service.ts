import { Injectable } from '@angular/core';
import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class EmployeesService {


  public search = new BehaviorSubject<string>("")

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getEmployees() {
    return this.http.get(
      environment.baseURL + '/employees.json'
    );
  }
  
  getDepartments() {
    return this.http.get(
      environment.baseURL + '/departments.json'
    );
  }

}
