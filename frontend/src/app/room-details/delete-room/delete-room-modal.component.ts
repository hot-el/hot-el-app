import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { RoomsService } from '../../_services/room.service';
import { Room } from '../../_models/room';
// import { Room } from '../../../../../backend/src/models/room.model';

@Component({
  selector: 'app-delete-room-modal',
  templateUrl: 'delete-room-modal.component.html',
  exportAs: 'deleteRoomModal',
  styleUrls: ['../../styles/modals.scss']
})
export class DeleteRoomModalComponent implements OnInit {

  room: Room;

  constructor(
    public thisDialogRef: MatDialogRef<DeleteRoomModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    public roomsService: RoomsService
  ) {}

  ngOnInit(): void {
    this.room = this.modalData.room;
    console.log('todelete');
    console.log(this.room);
  }

  onCloseConfirm() {
    console.log('confirmed');
    this.roomsService.deleteRoom(this.modalData.room).subscribe(res => {
      this.thisDialogRef.close(true);
    });
    console.log('deleted');
  }

  onCloseCancel() {
    this.thisDialogRef.close(false);
  }

}
