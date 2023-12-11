import { TestBed } from '@angular/core/testing';

import { DevisListService } from './devis-list.service';

describe('DevisListService', () => {
  let service: DevisListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevisListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
