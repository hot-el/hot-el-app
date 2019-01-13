import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../_services/room.service';
import { Room } from '../../_models/room';
// import { Room } from '../../../../backend/src/models/room.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms-to-reserve',
  templateUrl: './rooms-to-reserve.component.html',
  styleUrls: ['./rooms-to-reserve.component.css']
})
export class RoomsToReserveComponent implements OnInit {

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

  getUnreservedRooms(): void {
    this.roomsService.getUnreservedRooms().subscribe(rooms => this.rooms = rooms);
  }

  getUnreservedRoomsByCategory(category: string) {
    console.log('hi');
    this.roomsService.getUnreservedRoomsByCategory(category).subscribe(rooms => this.rooms = rooms);
  }

  getUnreservedRoomsByCategoryAndSize(category: string, size: string) {
    this.roomsService.getUnreservedRoomsByCategoryAndSize(category, size).subscribe(rooms => this.rooms = rooms);
  }

  fetchData() {
    console.log(this.size);
    if (this.size === 'all') {
      this.getUnreservedRoomsByCategory(this.category);
      } else {
        this.getUnreservedRoomsByCategoryAndSize(this.category, this.size);
      }
  }

}


