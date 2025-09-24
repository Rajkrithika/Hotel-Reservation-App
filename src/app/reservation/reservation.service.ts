import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [];
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      const savedReservations = localStorage.getItem("reservations");
      this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
    }
  }

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: number): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
    console.log(this.reservations);

    if (this.isBrowser) {
      localStorage.setItem('reservations', JSON.stringify(this.reservations));
    }
  }

  deleteReservation(id: number): void {
    this.reservations = this.reservations.filter(res => res.id !== id);

    if (this.isBrowser) {
      localStorage.setItem('reservations', JSON.stringify(this.reservations));
    }
  }
}
