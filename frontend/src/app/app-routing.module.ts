import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ManagerComponent } from './manager/manager.component';
import { RoomCategoryComponent } from './room-category/room-category.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomDetailComponent } from './room-details/room-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'room-categories', component: RoomCategoryComponent },
  { path: 'rooms/:categorySlug/:size', component: RoomsComponent },
  { path: 'details/:id', component: RoomDetailComponent },
  { path: 'rooms/rooms', component: RoomDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
