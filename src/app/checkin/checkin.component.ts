import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip.model';
import { CheckinService } from './checkin.service';
import swal from 'sweetalert2';
import { DriverDashboardComponent } from '../driver-dashboard/driver-dashboard.component';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  trip: Trip = new Trip();

  constructor(private _router: Router, private _checkinService: CheckinService) { }

  ngOnInit() {
  }

  validateToken() {
    this._checkinService.validateToken(this.trip.tokenRef).subscribe(data => {
      console.log(data._body);
      if (data._body === "true") {
        swal({
          title: 'Success!',
          text: 'Your token has been verfied! ',
          type: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          this._router.navigateByUrl('/tickets/'+this.trip.tokenRef);
          location.reload();
        });
      }
      else {
        swal({
          title: 'Error!',
          text: 'Failed to verify token! ',
          type: 'error',
          confirmButtonText: 'OK',
        }).then(() => {
          
          // Add pay with cash option

        });
      }
    });
  }

}
