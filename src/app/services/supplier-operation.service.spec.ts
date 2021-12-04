import { TestBed } from '@angular/core/testing';

import { SupplierOperationService } from './supplier-operation.service';

describe('SupplierOperationService', () => {
  let service: SupplierOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
