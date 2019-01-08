import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import {MaterialModule} from './material-module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatListModule, MatCardModule,
  MatTabsModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatFormFieldModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { ManagerComponent } from './manager/manager.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MessagesComponent } from './messages/messages.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeesDashboardComponent } from './employees-dashboard/employees-dashboard.component';
import { EmployeeSearchComponent } from './employees/employee-search/employee-search.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './_services/in-memory-data.service';

import { NewEmployeeModalComponent } from './employees/new-employee/new-employee-modal.component';
import { DeleteEmployeeModalComponent } from './employee-detail/delete-employee/delete-employee-modal.component';
import { UpdateEmployeeModalComponent } from './employee-detail/update-employee/update-employee-modal.component';

import { EmployeeService } from './_services/employee.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RoomsComponent,
    RoomDetailComponent,
    ManagerComponent,
    UserComponent,
    DashboardComponent,
    MainNavComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    EmployeesDashboardComponent,
    MessagesComponent,
    EmployeeSearchComponent,
    NewEmployeeModalComponent,
    DeleteEmployeeModalComponent,
    UpdateEmployeeModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatTabsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  entryComponents: [
    LoginComponent,
    UserComponent,
    ManagerComponent,
    NewEmployeeModalComponent,
    DeleteEmployeeModalComponent,
    UpdateEmployeeModalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
