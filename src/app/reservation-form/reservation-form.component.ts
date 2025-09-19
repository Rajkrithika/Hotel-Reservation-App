import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit {

  constructor(private FormBuilder: FormBuilder) {
    
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
      console.log("valid");
    }
  }


}
