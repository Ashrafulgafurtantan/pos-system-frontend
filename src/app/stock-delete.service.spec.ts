import { TestBed } from '@angular/core/testing';

import { StockDeleteService } from './stock-delete.service';

describe('StockDeleteService', () => {
  let service: StockDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
