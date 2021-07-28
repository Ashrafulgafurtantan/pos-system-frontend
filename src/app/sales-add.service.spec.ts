import { TestBed } from '@angular/core/testing';

import { SalesAddService } from './sales-add.service';

describe('SalesAddService', () => {
  let service: SalesAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
