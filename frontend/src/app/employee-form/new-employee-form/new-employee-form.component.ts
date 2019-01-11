import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {
  UsernameValidator,
  PasswordValidator,
  ParentErrorStateMatcher
} from '../../validators';
import { MatDialogRef } from '@angular/material';

import { EmployeeService } from '../../_services/employee.service';
import { Employee } from '../../../../sdk';


@Component({
  selector: 'app-new-employee-form',
  templateUrl: './new-employee-form.component.html',
  styleUrls: ['./new-employee-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewEmployeeFormComponent implements OnInit {

  employeeForm: FormGroup;
//   accountDetailsForm: FormGroup;
//   addEmployeeForm: FormGroup;

//   matching_passwords_group: FormGroup;
//   country_phone_group: FormGroup;

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
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ]
  };

//   account_validation_messages = {
//     'username': [
//       { type: 'required', message: 'Username is required' },
//       { type: 'minlength', message: 'Username must be at least 5 characters long' },
//       { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
//       { type: 'pattern', message: 'Your username must contain only numbers and letters' },
//       { type: 'validUsername', message: 'Your username has already been taken' }
//     ],
//     'email': [
//       { type: 'required', message: 'Email is required' },
//       { type: 'pattern', message: 'Enter a valid email' }
//     ],
//     'confirm_password': [
//       { type: 'required', message: 'Confirm password is required' },
//       { type: 'areEqual', message: 'Password mismatch' }
//     ],
//     'password': [
//       { type: 'required', message: 'Password is required' },
//       { type: 'minlength', message: 'Password must be at least 5 characters long' },
//       { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
//     ],
//     'terms': [
//       { type: 'pattern', message: 'You must accept terms and conditions' }
//     ]
//   };

  constructor(
    private fb: FormBuilder,
    public thisDialogRef: MatDialogRef<NewEmployeeFormComponent>,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.createForms();
  }

  createForms() {
    // matching passwords validation
    // this.matching_passwords_group = new FormGroup({
    //   password: new FormControl('', Validators.compose([
    //     Validators.minLength(5),
    //     Validators.required,
    //     Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
    //   ])),
    //   confirm_password: new FormControl('', Validators.required)
    // }, (formGroup: FormGroup) => {
    //   return PasswordValidator.areEqual(formGroup);
    // });

    // user details form validations
    this.employeeForm = this.fb.group({
      name: ['', Validators.required ],
      surname: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: new FormControl(this.genders[0], Validators.required),
      position: new FormControl(this.positions[0], Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        Validators.email
      ])),
    });


    // user links form validations
    // this.accountDetailsForm = this.fb.group({
    //   username: new FormControl('', Validators.compose([
    //    UsernameValidator.validUsername,
    //    Validators.maxLength(25),
    //    Validators.minLength(5),
    //    Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
    //    Validators.required
    //   ])),
    //   email: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    //   ])),
    //   matching_passwords: this.matching_passwords_group,
    //   terms: new FormControl(false, Validators.pattern('true'))
    // });

    // this.addEmployeeForm = this.fb.group(({
    //     user: this.userDetailsForm,
    //     account: this.accountDetailsForm
    // }));
  }

//   onSubmitAccountDetails(value) {
//     console.log(value);
//   }

  onSubmitEmployee(value) {
    console.log(value);
  }

  onCloseCancel() {
    this.thisDialogRef.close(null);
  }

  onSubmit(values) {
    const data: Employee = new Employee();
    data.name = values.name;

    // create new employee
    this.employeeService.createEmployee(data)
    .subscribe(name => {
      this.thisDialogRef.close(name);
      this.employeeForm.reset();
    });
  }

}
