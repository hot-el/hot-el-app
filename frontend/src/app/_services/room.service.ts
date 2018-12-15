import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Room } from '../_models/room';
import { ROOMS } from '../_mock/mock-rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  getRooms(): Observable<Room[]> {
    return of(ROOMS);
  }
  
}
