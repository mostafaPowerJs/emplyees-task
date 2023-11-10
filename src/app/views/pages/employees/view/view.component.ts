import { Component, OnInit } from '@angular/core';
import { Employee } from '../DTO/employee.model';
import { Department } from '../DTO/department.model';
import { EmployeesService } from '../services/employees.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {

  employees: Employee[] = [];
  departments: Department[] = [];
  searchKeys: string[] = ["performance", "skills"];
  public searchTerm: string = '';
  constructor(private services: EmployeesService) { }

  ngOnInit(): void {
    this.getEmployeesData();
    this.getDepartmentsData();
    this.services.search.subscribe((val: any) => {
      
      this.searchTerm = val;
    })
  }

  getEmployeesData() {
    this.services.getEmployees().subscribe(
      (res: any) => {
        this.employees = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getDepartmentsData() {
    this.services.getDepartments().subscribe(
      (res: any) => {
        this.departments = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.services.search.next(this.searchTerm);
  }
}
