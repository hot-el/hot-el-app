import { Component, OnInit, EventEmitter, Output, Inject, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { RoomService } from '../../_services/room.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Room } from '../../_models/room';
import { RoomModel } from 'src/app/_models/room-model';

@Component({
  selector: 'app-update-room-form',
  templateUrl: './update-room-form.component.html',
  exportAs: 'updateRoomForm',
  styleUrls: ['../../styles/modals.scss']
})

export class UpdateRoomFormComponent implements OnInit {

  room: RoomModel;
  roomForm: FormGroup;
  roomDetailsForm: FormGroup;
  updateRoomForm: FormGroup;

  sizes = [
    2,
    4,
    6
  ];

  types = [
    'Premium',
    'Basic'
  ];

  validation_messages = {
    'type': [
      { type: 'required', message: 'Type is required' },
    ],
    'number': [
      { type: 'required', message: 'Please select room number' },
      { type: 'pattern', message: 'You can pick only numbers' }
    ],
    'size': [
      { type: 'required', message: 'Please select number of people' },
    ],
    'dateConservation': [
      { type: 'required', message: 'Please insert last conservation date' },
    ],
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public roomService: RoomService,
    public thisDialogRef: MatDialogRef<UpdateRoomFormComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.room = this.modalData.room;
    console.log(this.room);
    this.createForms();
  }

  onCloseCancel() {
    this.thisDialogRef.close(null);
  }

  onSubmit(values) {
    const data: Room = new Room();
    console.log(values);

    // create new room
    // this.roomService.createRoom(data)
    // .subscribe(name => {
    //   this.thisDialogRef.close(name);
    //   this.roomForm.reset();
    // });
  }

  createForms() {
    // room form validations
    this.roomForm = this.fb.group({
      type: [this.room.type, Validators.required ],
      conservationDate: [this.room.conservationDate, Validators.required],
      size: new FormControl(this.room.size, Validators.required),
      number: [this.room.number, Validators.required]
    });
  }

  onSubmitRoom(value) {
    console.log(value);
  }
}

