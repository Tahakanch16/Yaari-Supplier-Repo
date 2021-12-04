import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSupplierSalesDetailsComponent } from './view-supplier-sales-details.component';

describe('ViewSupplierSalesDetailsComponent', () => {
  let component: ViewSupplierSalesDetailsComponent;
  let fixture: ComponentFixture<ViewSupplierSalesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSupplierSalesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSupplierSalesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
