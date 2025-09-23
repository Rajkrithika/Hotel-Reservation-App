import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations : Reservation[] = [];

  getReservations(): Reservation[] {
    return this.reservations;
  }
  getReservation(id: number) : Reservation | undefined {
    return this.reservations.find(res=> res.id === id);
  }

  addReservation(reservation: Reservation) : void{
    this.reservations.push(reservation);
    console.log(this.reservations);
  } 

  deleteReservation (id:number) : void {
    this.reservations = this.reservations.filter(res=> res.id !== id);
    this.reservations.splice(id, 1);
  }
}
