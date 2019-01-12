import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../_services/room.service';
import { Room } from '../_models/room';
// import { Room } from '../../../../backend/src/models/room.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Room[];
  selectedRoom: Room;
  category: string;
  size: string;

  constructor(
    private roomsService: RoomsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.category = this.route.snapshot.url[1].path;
    this.size = this.route.snapshot.url[2].path;
    this.fetchData();
    console.log(this.category);
  }

  // onSelect(room: Room): void {
  //   this.selectedRoom = room;
  //   console.log('selectedRoom');
  //   console.log(room);
  // }

  getRooms(): void {
    this.roomsService.getRooms().subscribe(rooms => this.rooms = rooms);
  }

  getRoomsByCategory(category: string) {
    this.roomsService.getRoomsByCategory(category).subscribe(rooms => this.rooms = rooms);
  }

  getRoomsByCategoryAndSize(category: string, size: string) {
    this.roomsService.getRoomsByCategoryAndSize(category, size).subscribe(rooms => this.rooms = rooms);
  }

  fetchData() {
    if (this.size === 'all') {
      this.getRoomsByCategory(this.category);
      } else {
        this.getRoomsByCategoryAndSize(this.category, this.size);
      }
}

}
