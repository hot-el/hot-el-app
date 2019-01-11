import { Component, OnInit, Input } from '@angular/core';
import { RoomModel } from '../_models/room-model';
import { DeleteRoomModalComponent } from './delete-room/delete-room-modal.component';
import { MatDialog } from '@angular/material';
import { RoomService } from '../_services/room.service';
import { UpdateRoomFormComponent } from './update-room/update-room-form.component';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  @Input() room: RoomModel;

  constructor(
    public dialog: MatDialog,
    private roomService: RoomService
  ) { }

  ngOnInit() {
  }

  openDeleteRoomModal(room: RoomModel) {
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

  delete(room: RoomModel): void {
    this.roomService.deleteRoom(room);
    // .subscribe();
  }

  openUpdateRoomForm(room: RoomModel) {
    console.log(room);
    const dialogRef = this.dialog.open(UpdateRoomFormComponent, {
      data: { room: room }
    });
  }

}
