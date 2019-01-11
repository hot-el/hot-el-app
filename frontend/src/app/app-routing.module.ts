import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesDashboardComponent } from './employees-dashboard/employees-dashboard.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ManagerComponent } from './manager/manager.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomCategoryComponent } from './room-category/room-category.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'dashboard', component: EmployeesDashboardComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'room-categories', component: RoomCategoryComponent },
  { path: 'employee-form', component: EmployeeFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
