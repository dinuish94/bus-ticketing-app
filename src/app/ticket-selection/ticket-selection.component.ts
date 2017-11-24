import { Component, OnInit } from '@angular/core';
import { Passenger } from '../models/passenger.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketSelectionService } from './ticket-selection.service';
import { BusStop } from '../models/busStop.model';
import { Trip } from '../models/trip.model';
import swal from 'sweetalert2';
import { DriverDashboardService } from '../driver-dashboard/driver-dashboard.service';
import { DriverDashboardComponent } from '../driver-dashboard/driver-dashboard.component';

@Component({
  selector: 'app-ticket-selection',
  templateUrl: './ticket-selection.component.html',
  styleUrls: ['./ticket-selection.component.css']
})
export class TicketSelectionComponent implements OnInit {

  passenger: Passenger = new Passenger();
  token: string = '';
  busHalts: Array<BusStop>;
  startLocation: string;
  endLocation: string;
  trip: Trip = new Trip();
  showPayment: boolean = false;
  payWithCash: boolean = false;
  ticketCount: number = 0;
  hasDayPass: boolean = false;
  validLocation: boolean = true;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _ticketSelection: TicketSelectionService) {

  }

  ngOnInit() {
    this.token = this._route.snapshot.params['token'];
    this.getBusHalts();
    this.getPassengerInformation();
  }

  getPassengerInformation() {
    this._ticketSelection.findPassengerByToken(this.token).subscribe(passenger => {
      console.log(passenger);
      this.passenger = passenger;
      this._ticketSelection.getDayPasses(this.token).subscribe(data => {
        console.log(data._body);
        if (data._body === "true") {
          this.hasDayPass = true;
          console.log(this.token);
        }
      })
    })
  }

  getBusHalts() {
    this._ticketSelection.getBusHalts().subscribe(bushalts => {
      this.busHalts = bushalts;
    })
  }

  addTrip() {
    this.trip.busId = 1;
    this.trip.endLocation = this.endLocation;
    this.trip.startLocation = this.startLocation;
    this.trip.tokenRef = this.token;

    this._ticketSelection.addTrip(this.trip).subscribe(trip => {
      this.showPayment = true;
      this.trip = trip;

      if (trip.payWithCash != 0) {
        this.payWithCash = true;
      }
    })
  }

  makePaymentWithCard() {
    this.trip.tokenRef = this.token;
    this._ticketSelection.confirmPayment(this.trip).subscribe(trip => {
      this.showWelcomeNotification();
    })
  }

  makePaymentWithCash() {
    this.trip.payWithCash = 1;
    this._ticketSelection.confirmPayment(this.trip).subscribe(trip => {
      this.showWelcomeNotification();
    })
  }

  showWelcomeNotification() {
    swal({
      title: 'Welcome Aboard!',
      text: '',
      type: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      this._router.navigateByUrl('/home');
      location.reload();
    });
  }

  onChange(deviceValue) {
    if (this.startLocation == this.endLocation){
      this.validLocation = false;
      (<HTMLInputElement> document.getElementById("submitTrip")).disabled = true;
    } else {
      this.validLocation = true;
      (<HTMLInputElement> document.getElementById("submitTrip")).disabled = false;
    }
  }
}
