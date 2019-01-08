import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../sdk';
import { EmployeeService } from '../_services/employee.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-employees-dashboard',
  templateUrl: './employees-dashboard.component.html',
  styleUrls: [ './employees-dashboard.component.css' ]
})
export class EmployeesDashboardComponent implements OnInit {

  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private location: Location
    ) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees.slice(1, 6));
  }

  goBack(): void {
    this.location.back();
  }

}
