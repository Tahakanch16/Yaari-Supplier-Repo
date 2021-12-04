import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDashboardHomeComponent } from './supplier-dashboard-home.component';

describe('SupplierDashboardHomeComponent', () => {
  let component: SupplierDashboardHomeComponent;
  let fixture: ComponentFixture<SupplierDashboardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierDashboardHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierDashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
