import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rooms } from '../_models/rooms';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private roomsUrl = 'http://localhost:3000/rooms';

  constructor(private http: HttpClient) { }

  getRooms (): Observable<Rooms[]> {
    return this.http.get<Rooms[]>(this.roomsUrl).pipe();
  }

  addRoom (room: Rooms): Observable<Rooms> {
    // console.log('addRoom');
    return this.http.post<Rooms>(this.roomsUrl, room, httpOptions).pipe();
  }

}
