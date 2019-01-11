import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RoomModel } from '../_models/room-model';
import { ROOMS } from '../_mock/mock-rooms_';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  getRooms(): Observable<RoomModel[]> {
    return of(ROOMS);
  }

  deleteRoom(room: RoomModel) {
    console.log(room);
  }

}
