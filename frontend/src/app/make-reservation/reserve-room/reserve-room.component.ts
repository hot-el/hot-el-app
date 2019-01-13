import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../../_models/room';
// import { Room } from '../../../../backend/src/models/room.model';
import { MatDialog } from '@angular/material';
import { RoomsService } from '../../_services/room.service';
import { NewReservationFormComponent } from './new-reservation/new-reservation-form.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reserve-room',
  templateUrl: './reserve-room.component.html',
  styleUrls: ['./reserve-room.component.css']
})
export class ReserveRoomComponent implements OnInit {

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


  openNewReservationForm(room: Room) {
    const dialogRef = this.dialog.open(NewReservationFormComponent, {
      data: { room: room }
    });

    dialogRef.afterClosed().subscribe(confirm => {
      if (confirm) {
        this.delete(room);
        // this.location.back();
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
    const dialogRef = this.dialog.open(NewReservationFormComponent, {
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
