import { TestBed, inject } from '@angular/core/testing';

import { TicketSelectionService } from './ticket-selection.service';

describe('TicketSelectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketSelectionService]
    });
  });

  it('should be created', inject([TicketSelectionService], (service: TicketSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
