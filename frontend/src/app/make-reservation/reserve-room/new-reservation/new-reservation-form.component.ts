import { Component, OnInit, EventEmitter, Output, Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Room } from 'src/app/_models/room';
import { Reservation } from 'src/app/_models/reservation';
// import { Room } from '../../../../../backend/src/models/room.model';
import { RoomsService } from '../../../_services/room.service';
import { NewRoomFormComponent } from 'src/app/room-category/new-room/new-room-form.component';


@Component({
  selector: 'app-new-reservation-form',
  templateUrl: './new-reservation-form.component.html',
  styleUrls: ['./new-reservation-form.component.scss']
})
export class NewReservationFormComponent implements OnInit {

  reservationForm: FormGroup;
  room: Room;

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
    public roomsService: RoomsService,
    public thisDialogRef: MatDialogRef<NewRoomFormComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.room = this.modalData.room;
    console.log('room');
    console.log(this.room);
    this.createForms();
  }

  onCloseCancel() {
    this.thisDialogRef.close(null);
  }

  createForms() {
    // room form validations
    console.log('creating forms');
    this.reservationForm = this.fb.group({
      firstName: [this.types[0], Validators.required ],
      lastName: [this.types[0], Validators.required ],
      idCard: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required]
    });
  }

  onSubmitReservation(values) {
    console.log(values);
    const reservation: Reservation = new Reservation();
    reservation.firstName = values.firstName;
    reservation.lastName = values.lastName;
    reservation.from = values.from;
    reservation.to = values.to;
    reservation.room = this.room;
    this.addReservation(reservation);
    console.log('reservation');
    console.log(reservation);
    // this.addReservation(value);
  }

  addReservation(reservation): void {
    if (!reservation) { return; }
  //   this.roomsService.addRoom(reservation)
  //     .subscribe(res => {
  //       this.thisDialogRef.close(res);
  //       this.reservationForm.reset();
  //     });
  // }

 }

}

