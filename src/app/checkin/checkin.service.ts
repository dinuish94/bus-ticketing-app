import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CheckinService {

  private _checkinUrl = 'http://localhost:8080/checkin';

  constructor(private _http: Http) { }

  validateToken(tokenRef: String):Observable<any>{
    return this._http.get(this._checkinUrl+'?token='+tokenRef)
    .map((response: Response) => <any>response)
    .do(data => console.log(data))
  }
}
