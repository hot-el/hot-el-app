import { Component, OnInit, EventEmitter, Output, Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { EmployeeService } from '../../_services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Employee } from '../../../../sdk';


@Component({
  selector: 'app-new-employee-modal',
  templateUrl: './new-employee-modal.component.html',
  exportAs: 'newEmployeeModal',
  styleUrls: ['../../styles/modals.scss']
})

export class NewEmployeeModalComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public employeeService: EmployeeService,
    public thisDialogRef: MatDialogRef<NewEmployeeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
  ) {}

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
        name: new FormControl('', Validators.required)
    });
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
