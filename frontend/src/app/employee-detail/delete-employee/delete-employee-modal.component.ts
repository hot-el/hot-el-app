import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { EmployeeService } from '../../_services/employee.service';
import { Employee } from '../../../../sdk';

@Component({
  selector: 'app-delete-employee-modal',
  templateUrl: 'delete-employee-modal.component.html',
  exportAs: 'deleteEmployeeModal',
  styleUrls: ['../../styles/modals.scss']
})
export class DeleteEmployeeModalComponent implements OnInit {

  employee: Employee;

  constructor(
    public thisDialogRef: MatDialogRef<DeleteEmployeeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    public employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.employee = this.modalData.employee;
    console.log('todelete');
    console.log(this.employee.name);
  }

  onCloseConfirm() {
    this.employeeService.deleteEmployee(this.modalData.employee.id)
    .subscribe(res => {
      this.thisDialogRef.close(true);
    });
  }

  onCloseCancel() {
    this.thisDialogRef.close(false);
  }

}
