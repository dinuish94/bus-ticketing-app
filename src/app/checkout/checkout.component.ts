import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckinService } from '../checkin/checkin.service';
import swal from 'sweetalert2';
import { Trip } from '../models/trip.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

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
          this._checkinService.checkout(this.trip).subscribe( data => {
            this._router.navigateByUrl('/home');
            location.reload();
          })
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
