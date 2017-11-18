import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { Trip } from '../models/trip.model';

@Injectable()
export class DriverDashboardService {

  totalTicketCount: BehaviorSubject<number>;
  private _tripsUrl = 'http://localhost:8080/buses/';
  private _checkout = 'http://localhost:8080/checkout';
  
  constructor(private _http: Http) {}

  getTrips(id: number): Observable<Array<Trip>>{
    return this._http.get(this._tripsUrl+id+'/trips')
    .map((response: Response) => response.json())
    .do(data => console.log(data))
  } 

  makePaymentByCash(id: number): Observable<Trip> {
    return this._http.post(this._checkout+'?tripId='+id,'')
    .map((response: Response) => response.json())
    .do(data => console.log(data))
  }

}
