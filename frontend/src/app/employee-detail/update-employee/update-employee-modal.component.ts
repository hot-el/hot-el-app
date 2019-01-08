import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { EmployeeService } from '../../_services/employee.service';
import { Employee } from '../../../../sdk';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-update-employee-modal',
  templateUrl: './update-employee-modal.component.html',
  exportAs: 'updateEmployeeModal',
  styleUrls: ['../../styles/modals.scss']
})

export class UpdateEmployeeModalComponent implements OnInit {

  employeeForm: FormGroup;
  emp: Employee;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public employeeService: EmployeeService,
    public thisDialogRef: MatDialogRef<UpdateEmployeeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any
  ) {
  }

  ngOnInit(): void {
    console.log('onInit');
    console.log(this.modalData.employee);
    this.emp = this.modalData.employee;
    console.log(this.emp);
    this.employeeForm = new FormGroup({
      name: new FormControl(this.modalData.employee.name, Validators.required)
    });
  }

  onCloseCancel() {
    this.thisDialogRef.close();
  }

  onSubmit(values) {
    console.log('values');
    console.log(values);
    const newEmployee = this.modalData.employee;
    console.log('newEmployee');
    console.log(newEmployee);
    newEmployee.name = values.name;
    console.log('newname');
    console.log(newEmployee);
    this.employeeService.updateEmployee(newEmployee)
    .subscribe(name => {
      this.thisDialogRef.close(name);
      this.employeeForm.reset();
    });
  }

}
