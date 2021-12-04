import { TestBed } from '@angular/core/testing';

import { SubSupplierAuthenticationService } from './sub-supplier-authentication.service';

describe('SubSupplierAuthenticationService', () => {
  let service: SubSupplierAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubSupplierAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
