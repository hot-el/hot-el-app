import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-employees-dashboard',
  templateUrl: './employees-dashboard.component.html',
  styleUrls: [ './employees-dashboard.component.css' ]
})
export class EmployeesDashboardComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees.slice(1, 5));
  }

  // getEmployees2(): void {
  //   this.employeeService.getEmployees2();
  // }

}
