import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../_models/room';
// import { Room } from '../../../../backend/src/models/room.model';
import { DeleteRoomModalComponent } from './delete-room/delete-room-modal.component';
import { MatDialog } from '@angular/material';
import { RoomsService } from '../_services/room.service';
import { UpdateRoomFormComponent } from './update-room/update-room-form.component';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  @Input() room: Room;

  constructor(
    public dialog: MatDialog,
    private roomsService: RoomsService
  ) { }

  ngOnInit() {
    console.log('Room Details activated');
    console.log(this.room);
  }

  openDeleteRoomModal(room: Room) {
    const dialogRef = this.dialog.open(DeleteRoomModalComponent, {
      data: { room: room }
    });

    dialogRef.afterClosed().subscribe(confirm => {
      if (confirm) {
        this.delete(room);
        // this.router.navigateByUrl('/Rooms');
        // refresh the Rooms list
        // const index = this.Rooms.findIndex((Room) => Room.id === RoomId);
        // this.Rooms.splice(index, 1);

        // TODO: evaluar cambiar esto por un operation method en loopback.
        // this.RoomService.getAnswers(RoomId)
        // .then(answers => {
        //   for(let answer of answers){
        //     this.answersService.deleteAnswer(answer.id);
        //   }
        // })
      }
    });
  }

  delete(room: Room): void {
    this.roomsService.deleteRoom(room);
    // .subscribe();
  }

  openUpdateRoomForm(room: Room) {
    console.log(room);
    const dialogRef = this.dialog.open(UpdateRoomFormComponent, {
      data: { room: room }
    });
  }
}
