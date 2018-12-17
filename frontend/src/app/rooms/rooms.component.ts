import { Component, OnInit } from '@angular/core';
import { RoomService } from '../_services/room.service';
import { Room } from '../_models/room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Room[];
  selectedRoom: Room;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.getRooms();
  }

  onSelect(room: Room): void {
    this.selectedRoom = room;
  }

  getRooms(): void {
    this.roomService.getRooms().subscribe(rooms => this.rooms = rooms);
  }

}
