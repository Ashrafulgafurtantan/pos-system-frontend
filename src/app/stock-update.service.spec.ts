import { TestBed } from '@angular/core/testing';

import { StockUpdateService } from './stock-update.service';

describe('StockUpdateService', () => {
  let service: StockUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
