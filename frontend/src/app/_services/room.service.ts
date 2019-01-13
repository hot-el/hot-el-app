import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../_models/room';
// import { Room } from '../../../../backend/src/models/room.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private roomsUrl = 'http://localhost:3000/rooms';

  constructor(private http: HttpClient) { }

  getRooms (): Observable<Room[]> {
    return this.http.get<Room[]>(this.roomsUrl);
  }

  getUnreservedRooms (): Observable<Room[]> {
    const url = `${this.roomsUrl}?filter[where][occupied]=false}`;
    return this.http.get<Room[]>(url);
  }

  getRoom (id: string): Observable<Room> {
    const url = `${this.roomsUrl}/${id}`;
    return this.http.get<Room>(url);
  }

  addRoom (room: Room): Observable<Room> {
    // console.log('addRoom');
    return this.http.post<Room>(this.roomsUrl, room, httpOptions);
  }

  deleteRoom(room: Room | number): Observable<Room> {
    const id = typeof room === 'number' ? room : room.id;
    const url = `${this.roomsUrl}/${id}`;
    return this.http.delete<Room>(url, httpOptions);
  }

  getRoomsByCategory(category: string) {
    const url = `${this.roomsUrl}?filter[where][type]=${category}`;
    return this.http.get<Room[]>(url, httpOptions);
  }

  getUnreservedRoomsByCategory(category: string) {
    const url = `${this.roomsUrl}?filter[where][type]=${category}&filter[where][occupied]=false`;
    console.log(url);
    return this.http.get<Room[]>(url, httpOptions);
  }

  getRoomsByCategoryAndSize(category: string, size: string) {
    const url = `${this.roomsUrl}?filter[where][type]=${category}&filter[where][size]=${size}`;
    console.log(url);
    return this.http.get<Room[]>(url, httpOptions);
  }

  getUnreservedRoomsByCategoryAndSize(category: string, size: string) {
    const url = `${this.roomsUrl}?filter[where][type]=${category}&filter[where][size]=${size}&filter[where][occupied]=false`;
    console.log(url);
    return this.http.get<Room[]>(url, httpOptions);
  }

  updateRoom (room: Room, room_id: string): Observable<any> {
    console.log('update');
    console.log(room);
    console.log('roooom');
    const url = `${this.roomsUrl}/${room_id}`;
    console.log(room_id);
    const body = JSON.stringify(room);
    console.log('body');
    console.log(body);
    return this.http.put(url, room, httpOptions).pipe();
  }

  // getRoomsByCategory(category: string) {
  //   this.getRooms()
  //       .subscribe(rooms => {
  //         return rooms.find((room) => {
  //           return room.type === category;
  //         });
  //       });
  //   }

    // getRoomsByCategory(category) {
    //   const filter: LoopBackFilter = {
    //     "include":{
    //       "relation": "answers"
    //     },
    //     "where": {
    //       "type": category
    //     }
    //   };
    //   return this.questionApi.find<Question>(filter)
    //   .toPromise()
    // }

}
