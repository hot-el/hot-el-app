import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../_models/room';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.styl']
})
export class RoomDetailComponent implements OnInit {
  @Input() room: Room;

  constructor() { }

  ngOnInit() {
  }

}
