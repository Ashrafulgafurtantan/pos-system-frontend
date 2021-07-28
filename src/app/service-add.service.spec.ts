import { TestBed } from '@angular/core/testing';

import { ServiceAddService } from './service-add.service';

describe('ServiceAddService', () => {
  let service: ServiceAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
