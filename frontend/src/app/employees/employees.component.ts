import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../_services/employee.service';
import { Employee } from '../../../sdk';

import { NewEmployeeFormComponent } from '../employee-form/new-employee-form/new-employee-form.component';

import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  name: string;

  constructor(
    private employeeService: EmployeeService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
        .subscribe(employees => this.employees = employees);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.employeeService.createEmployee({ name } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }

  openNewEmployeeForm() {
    const dialogRef = this.dialog.open(NewEmployeeFormComponent);

    dialogRef.afterClosed().subscribe(employee => {
      if (employee !==  null && employee !== undefined && employee !== '') {
        this.employees.push(employee);
      }
    });
  }

}
