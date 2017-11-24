import { Component, OnInit } from '@angular/core';

import { InspectTripsService } from './inspect-trips.service';

@Component({
  selector: 'app-inspector-dashboard',
  templateUrl: './inspector-dashboard.component.html',
  styleUrls: ['./inspector-dashboard.component.css']
})
export class InspectorDashboardComponent implements OnInit {
  public token: string;
  public trips: any;
  public showTable: boolean = false;

  constructor(private _inspectTripsService: InspectTripsService) { }

  ngOnInit() {
  }

  public getTrips() {
    this._inspectTripsService.getTripsByToken(this.token).subscribe(trips => {
      this.trips = trips;
      this.showTable = true;
    });
  }

  public getColor(isCompleted: boolean) {
    if(isCompleted) {
      return 'black';
    } else {
      return 'red';
    }
  }

}
