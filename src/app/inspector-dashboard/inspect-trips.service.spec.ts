import { TestBed, inject } from '@angular/core/testing';

import { InspectTripsService } from './inspect-trips.service';

describe('InspectTripsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InspectTripsService]
    });
  });

  it('should be created', inject([InspectTripsService], (service: InspectTripsService) => {
    expect(service).toBeTruthy();
  }));
});
