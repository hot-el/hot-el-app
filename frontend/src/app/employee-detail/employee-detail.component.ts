import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Employee } from '../../../sdk';
import { EmployeeService } from '../_services/employee.service';

import { UpdateEmployeeModalComponent } from './update-employee/update-employee-modal.component';
import { DeleteEmployeeModalComponent } from './delete-employee/delete-employee-modal.component';
import { MatDialog } from '@angular/material';

import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  @Input() employee: Employee;
  @Input() id: string;
  employees: Employee[];
  name: string;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.getEmployee();
    this.getEmployees();
  }

  getEmployee(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.employeeService.getEmployee(id)
      .subscribe(employee => this.employee = employee);
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
        .subscribe(employees => this.employees = employees);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.employeeService.updateEmployee(this.employee)
      .subscribe(() => this.goBack());
  }

  openUpdateEmployeeModal(employee_: Employee) {
    console.log('ej');
    console.log(employee_.name);
    console.log(employee_);
    const dialogRef = this.dialog.open(UpdateEmployeeModalComponent, {
      data: { employee: employee_ }
    });

  }

  delete(employee: Employee): void {
    this.employees = this.employees.filter(h => h !== employee);
    this.employeeService.deleteEmployee(employee).subscribe();
  }

  openDeleteEmployeeModal(employee: Employee) {
    const dialogRef = this.dialog.open(DeleteEmployeeModalComponent, {
      data: { employee: employee }
    });

    dialogRef.afterClosed().subscribe(confirm => {
      if (confirm) {
        this.delete(employee);
        this.router.navigateByUrl('/employees');
        // refresh the employees list
        // const index = this.employees.findIndex((employee) => employee.id === employeeId);
        // this.employees.splice(index, 1);

        // TODO: evaluar cambiar esto por un operation method en loopback.
        // this.employeeService.getAnswers(employeeId)
        // .then(answers => {
        //   for(let answer of answers){
        //     this.answersService.deleteAnswer(answer.id);
        //   }
        // })
      }
    });
  }

}
