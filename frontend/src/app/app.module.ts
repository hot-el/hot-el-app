import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './_services/in-memory-data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { ManagerComponent } from './manager/manager.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeesDashboardComponent } from './employees-dashboard/employees-dashboard.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { MessagesComponent } from './messages/messages.component';


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
    EmployeesComponent,
    EmployeeDetailComponent,
    EmployeesDashboardComponent,
    MessagesComponent,
    EmployeeSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  entryComponents: [
    LoginComponent,
    UserComponent,
    ManagerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
