import { Component, OnInit } from '@angular/core';
import { Passenger } from '../models/passenger.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketSelectionService } from './ticket-selection.service';

@Component({
  selector: 'app-ticket-selection',
  templateUrl: './ticket-selection.component.html',
  styleUrls: ['./ticket-selection.component.css']
})
export class TicketSelectionComponent implements OnInit {

  passenger: Passenger = new Passenger();
  token: String = '';

  constructor(private _route: ActivatedRoute, private _ticketSelection: TicketSelectionService) { }

  ngOnInit() {
    this.token = this._route.snapshot.params['token'];
    this.getPassengerInformation();
  }

  getPassengerInformation(){
    this._ticketSelection.findPassengerByToken(this.token).subscribe(passenger => {
      console.log(passenger);
      this.passenger = passenger;
    })
  }
}
