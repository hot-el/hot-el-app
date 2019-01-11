import { Component, OnInit, ViewEncapsulation, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {
  ParentErrorStateMatcher
} from '../../validators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Employee } from 'sdk';
import { EmployeeService } from '../../_services/employee.service';

@Component({
  selector: 'app-update-employee-form',
  templateUrl: './update-employee-form.component.html',
  styleUrls: ['./update-employee-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UpdateEmployeeFormComponent implements OnInit {

  updateEmployeeForm: FormGroup;
  @Input() employee: Employee;
  @Input() id: string;


  parentErrorStateMatcher = new ParentErrorStateMatcher();

  genders = [
    'Male',
    'Female'
  ];

  positions = [
    'Manager',
    'Recepcionist',
    'Waiter',
    'Cleaner'
  ];

  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required' }
    ],
    'surname': [
        { type: 'required', message: 'Surame is required' }
    ],
    'gender': [
      { type: 'required', message: 'Please select gender' },
    ],
    'position': [
        { type: 'required', message: 'Please insert position' },
    ],
    'birthday': [
      { type: 'required', message: 'Please birthday' },
    ]
  };

  constructor(
    private fb: FormBuilder,
    public thisDialogRef: MatDialogRef<UpdateEmployeeFormComponent>,
    private employeeService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public modalData: any) { }

  ngOnInit() {
    console.log('onInit');
    console.log(this.modalData.employee);
    this.employee = this.modalData.employee;
    console.log(this.employee);
    this.createForms(this.modalData);
  }

  createForms(modalData: any) {
    this.updateEmployeeForm = this.fb.group({
      name: [this.employee.name, Validators.required ],
      surname: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: new FormControl(this.genders[0], Validators.required),
      position: new FormControl(this.positions[0], Validators.required)
    });
  }

  onSubmitEmployee(value) {
    console.log(value);
    this.thisDialogRef.close();
    // const newEmployee = this.modalData.employee;
    // newEmployee.name = values.name;
    // this.employeeService.updateEmployee(newEmployee)
    // .subscribe(name => {
    //   this.thisDialogRef.close(name);
    //   this.updateEmployeeForm.reset();
    // });
  }

  onCloseCancel() {
    this.thisDialogRef.close();
  }

}
