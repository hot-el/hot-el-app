import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomDetailComponent } from './room-details/room-detail.component';
import { ManagerComponent } from './manager/manager.component';
import { UserComponent } from './user/user.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RoomCategoryComponent } from './room-category/room-category.component';
import { CategoriesService } from './_services/categories.service';
import { NewRoomFormComponent } from './room-category/new-room/new-room-form.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteRoomModalComponent } from './room-details/delete-room/delete-room-modal.component';
import { UpdateRoomFormComponent } from './room-details/update-room/update-room-form.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';
import { RoomsToReserveComponent } from './make-reservation/rooms-to-reserve/rooms-to-reserve.component';
import { ReserveRoomComponent } from './make-reservation/reserve-room/reserve-room.component';
import { NewReservationFormComponent } from './make-reservation/reserve-room/new-reservation/new-reservation-form.component';

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
    MainNavComponent,
    RoomCategoryComponent,
    NewRoomFormComponent,
    DeleteRoomModalComponent,
    UpdateRoomFormComponent,
    ReceptionistComponent,
    MakeReservationComponent,
    RoomsToReserveComponent,
    ReserveRoomComponent,
    NewReservationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    LoginComponent,
    UserComponent,
    ManagerComponent,
    NewRoomFormComponent,
    DeleteRoomModalComponent,
    UpdateRoomFormComponent,
    RoomDetailComponent,
    NewReservationFormComponent
  ],
  providers: [
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
