import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { RoomService } from '../../_services/room.service';
import { RoomModel } from '../../_models/room-model';

@Component({
  selector: 'app-delete-room-modal',
  templateUrl: 'delete-room-modal.component.html',
  exportAs: 'deleteRoomModal',
  styleUrls: ['../../styles/modals.scss']
})
export class DeleteRoomModalComponent implements OnInit {

  room: RoomModel;

  constructor(
    public thisDialogRef: MatDialogRef<DeleteRoomModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    public roomService: RoomService
  ) {}

  ngOnInit(): void {
    this.room = this.modalData.room;
    console.log('todelete');
    console.log(this.room);
  }

  onCloseConfirm() {
    this.roomService.deleteRoom(this.modalData.room);
    this.thisDialogRef.close(true);
    // .subscribe(res => {
    //   this.thisDialogRef.close(true);
    // });
  }

  onCloseCancel() {
    this.thisDialogRef.close(false);
  }

}
