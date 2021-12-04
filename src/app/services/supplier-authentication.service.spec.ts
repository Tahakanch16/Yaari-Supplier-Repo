import { TestBed } from '@angular/core/testing';

import { SupplierAuthenticationService } from './supplier-authentication.service';

describe('SupplierAuthenticationService', () => {
  let service: SupplierAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
