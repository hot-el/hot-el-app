import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../_models/room';
// import { Room } from '../../../../backend/src/models/room.model';
import { DeleteRoomModalComponent } from './delete-room/delete-room-modal.component';
import { MatDialog } from '@angular/material';
import { RoomsService } from '../_services/room.service';
import { UpdateRoomFormComponent } from './update-room/update-room-form.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  @Input() room: Room;

  constructor(
    public dialog: MatDialog,
    private roomsService: RoomsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    console.log('Room Details activated');
    console.log(this.room);
    this.getRoom();
  }

  openDeleteRoomModal(room: Room) {
    const dialogRef = this.dialog.open(DeleteRoomModalComponent, {
      data: { room: room }
    });

    dialogRef.afterClosed().subscribe(confirm => {
      if (confirm) {
        this.delete(room);
        this.location.back();
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

    dialogRef.afterClosed().subscribe(() => {
      console.log('heyhey');
      this.getRoom();
      console.log('heykey2');
    });

  }

  getRoom(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.roomsService.getRoom(id)
      .subscribe(room => this.room = room);
  }

  goBack(): void {
    this.location.back();
  }

}
