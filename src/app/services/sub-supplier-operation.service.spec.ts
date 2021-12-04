import { TestBed } from '@angular/core/testing';

import { SubSupplierOperationService } from './sub-supplier-operation.service';

describe('SubSupplierOperationService', () => {
  let service: SubSupplierOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubSupplierOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
