import { Component, OnInit } from '@angular/core';
import { RoomService } from '../_services/room.service';
import { RoomModel } from '../_models/room-model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: RoomModel[];
  selectedRoom: RoomModel;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.getRooms();
  }

  onSelect(room: RoomModel): void {
    this.selectedRoom = room;
    console.log(room);
  }

  getRooms(): void {
    this.roomService.getRooms().subscribe(rooms => this.rooms = rooms);
  }

}
