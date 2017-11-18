import { TestBed, inject } from '@angular/core/testing';

import { DriverDashboardService } from './driver-dashboard.service';

describe('DriverDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DriverDashboardService]
    });
  });

  it('should be created', inject([DriverDashboardService], (service: DriverDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
