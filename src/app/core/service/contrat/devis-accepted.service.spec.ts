import { TestBed } from '@angular/core/testing';

import { DevisAcceptedService } from '../devis-accepted.service';

describe('DevisAcceptedService', () => {
  let service: DevisAcceptedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevisAcceptedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
