import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSupplierProfileComponent } from './view-supplier-profile.component';

describe('ViewSupplierProfileComponent', () => {
  let component: ViewSupplierProfileComponent;
  let fixture: ComponentFixture<ViewSupplierProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSupplierProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSupplierProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
