import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ManagerComponent } from './manager/manager.component';
import { RoomCategoryComponent } from './room-category/room-category.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomDetailComponent } from './room-details/room-detail.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';
import { RoomsToReserveComponent } from './make-reservation/rooms-to-reserve/rooms-to-reserve.component';
import { ReserveRoomComponent } from './make-reservation/reserve-room/reserve-room.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'room-categories', component: RoomCategoryComponent },
  { path: 'rooms/:categorySlug/:size', component: RoomsComponent },
  { path: 'details/:id', component: RoomDetailComponent },
  { path: 'rooms/rooms', component: RoomDetailComponent },
  { path: 'receptionist', component: ReceptionistComponent },
  { path: 'reservation', component: MakeReservationComponent},
  { path: 'rooms-to-reserve/:categorySlug/:size', component: RoomsToReserveComponent},
  { path: 'new-reservation/:id', component: ReserveRoomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
