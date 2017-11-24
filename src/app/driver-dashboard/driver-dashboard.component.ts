import { Component, OnInit } from '@angular/core';
import { DriverDashboardService } from './driver-dashboard.service';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';
import { Trip } from '../models/trip.model';


@Component({
  selector: 'app-driver-dashboard',
  templateUrl: './driver-dashboard.component.html',
  styleUrls: ['./driver-dashboard.component.css']
})
export class DriverDashboardComponent implements OnInit {
  
  timerSubscription;
  trips: Array<Trip>;
  search: string = "";
  filteredTrips: Array<Trip>;

  constructor(private _driverService: DriverDashboardService) {
    // this.refreshData();
  }

  ngOnInit() {
    this.refreshData();
  }

  refreshData(): void {
    this._driverService.getTrips(1).subscribe(trips => {
      console.log(JSON.stringify(trips));
      this.trips = trips;
      console.log(this.search)
      if(this.search == ""){
        this.filteredTrips = trips;
      }
      
      this.subscribeToData();
    });
  }

  subscribeToData(): void {
    this.timerSubscription = Observable.timer(5000).first().subscribe(() => this.refreshData());
  }

  public ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  makePaymentByCash(tripId: number){
    this._driverService.makePaymentByCash(tripId).subscribe(trips => {
      this.refreshData();
    });
  }

  valuechange(newValue){
    if (newValue == ""){
      this.filteredTrips = this.trips;
    } else {
      console.log(newValue);
      this.filteredTrips = this.trips.filter(trip=> trip.endLocation.startsWith(newValue));
    }
  }

}

