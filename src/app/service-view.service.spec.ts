import { TestBed } from '@angular/core/testing';

import { ServiceViewService } from './service-view.service';

describe('ServiceViewService', () => {
  let service: ServiceViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
