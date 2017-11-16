import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Passenger } from '../models/passenger.model';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class TicketSelectionService {

  private _checkinUrl = 'http://localhost:8080/checkin';

  constructor(private _http: Http) { }

  findPassengerByToken(token: String): Observable<Passenger>{
    return this._http.get(this._checkinUrl+'/passenger?token='+token)
    .map((response: Response) => response.json())
    .do(data => console.log(data))
  }
}
