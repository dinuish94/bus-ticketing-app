import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InspectTripsService {

  constructor(private _http: Http) { }

  getTripsByToken(token: string) {
    return this._http.get(`http://localhost:8080/trips?token=${token}`).map(res => res.json());
  }

}
