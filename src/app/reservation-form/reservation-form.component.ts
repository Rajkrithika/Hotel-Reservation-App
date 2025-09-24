import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit {

  constructor(private FormBuilder: FormBuilder, 
    private reservationservice : ReservationService ,
    private router: Router

  ) {
    this.reservationForm = new FormGroup({
      checkInDate: this.FormBuilder.control(''),
      checkOutDate: this.FormBuilder.control(''),
      guestEmail: this.FormBuilder.control(''),
      guestName: this.FormBuilder.control(''),
      numberOfGuests: this.FormBuilder.control('')
    });
    
  }
  ngOnInit(): void {

    this.reservationForm = this.FormBuilder.group ({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      guestName: ['', Validators.required],
      numberOfGuests: ['', [Validators.required, Validators.min(1)]]
    })
  }

  reservationForm: FormGroup = new FormGroup({}); 

  onSubmit() {
    if(this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;
      this.reservationservice.addReservation(reservation);

      this.router.navigate(['/list']);
    }
  }


  }




