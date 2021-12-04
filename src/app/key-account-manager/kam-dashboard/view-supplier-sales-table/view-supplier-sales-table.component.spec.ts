import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSupplierSalesTableComponent } from './view-supplier-sales-table.component';

describe('ViewSupplierSalesTableComponent', () => {
  let component: ViewSupplierSalesTableComponent;
  let fixture: ComponentFixture<ViewSupplierSalesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSupplierSalesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSupplierSalesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
