import { TestBed } from '@angular/core/testing';

import { ServiceUpdateService } from './service-update.service';

describe('ServiceUpdateService', () => {
  let service: ServiceUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
