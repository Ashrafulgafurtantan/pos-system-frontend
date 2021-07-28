import { TestBed } from '@angular/core/testing';

import { StockAddService } from './stock-add.service';

describe('StockAddService', () => {
  let service: StockAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
