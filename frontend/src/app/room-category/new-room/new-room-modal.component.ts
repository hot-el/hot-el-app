import { Component, OnInit, EventEmitter, Output, Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { RoomService } from '../../_services/room.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Room } from '../../_models/room';

@Component({
  selector: 'app-new-room-modal',
  templateUrl: './new-room-modal.component.html',
  exportAs: 'newRoomModal',
  styleUrls: ['../../styles/modals.scss']
})

export class NewRoomModalComponent implements OnInit {

  roomForm: FormGroup;
  roomDetailsForm: FormGroup;
  addRoomForm: FormGroup;

  os = [
    2,
    4,
    6
  ];

  validation_messages = {
    'fullname': [
      { type: 'required', message: 'Full name is required' }
    ],
    'bio': [
      { type: 'maxlength', message: 'Bio cannot be more than 256 characters long' },
    ],
    'os': [
      { type: 'required', message: 'Please select number of people' },
    ],
    'birthday': [
      { type: 'required', message: 'Please insert your birthday' },
    ],
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public roomService: RoomService,
    public thisDialogRef: MatDialogRef<NewRoomModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForms();
  }

  onCloseCancel() {
    this.thisDialogRef.close(null);
  }

  onSubmit(values) {
    const data: Room = new Room();
    data.roomNumber = values.roomNumber;

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
      fullname: ['Homero Simpson', Validators.required ],
      bio: ['Lorem Ipsum is simply dummy text of the printing.', Validators.maxLength(256)],
      birthday: ['', Validators.required],
      os: new FormControl(this.os[0], Validators.required)
    });


    // user links form validations
    this.roomDetailsForm = this.fb.group({
      username: new FormControl('', Validators.compose([
       Validators.maxLength(25),
       Validators.minLength(5),
       Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
       Validators.required
      ]))
    });

    this.addRoomForm = this.fb.group(({
        room: this.roomForm,
        roomDetails: this.roomDetailsForm
    }));
  }

  onSubmitRoomDetails(value) {
    console.log(value);
  }

  onSubmitRoom(value) {
    console.log(value);
  }

}

