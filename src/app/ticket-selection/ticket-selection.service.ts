import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Passenger } from '../models/passenger.model';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { BusStop } from '../models/busStop.model';
import { Trip } from '../models/trip.model';

@Injectable()  
export class TicketSelectionService {

  private _checkinUrl = 'http://localhost:8080/checkin';
  private _busHalts = 'http://localhost:8080/busStops';

  constructor(private _http: Http) { }

  findPassengerByToken(token: String): Observable<Passenger>{
    return this._http.get(this._checkinUrl+'/passenger?token='+token)
    .map((response: Response) => response.json())
    .do(data => console.log(data))
  }

  getBusHalts(): Observable<Array<BusStop>>{
    return this._http.get(this._busHalts)
    .map((response: Response) => response.json())
    .do(data => console.log(data))
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this._http.post(this._checkinUrl+'/',trip)
    .map((response: Response) => response.json())
    .do(data => console.log(data))
  }

  confirmPayment(trip: Trip): Observable<Trip> {
    return this._http.put(this._checkinUrl+'/',trip)
    .map((response: Response) => response.json())
    .do(data => console.log(data))
  }
}
