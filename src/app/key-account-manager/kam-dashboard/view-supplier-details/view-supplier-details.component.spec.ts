import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSupplierDetailsComponent } from './view-supplier-details.component';

describe('ViewSupplierDetailsComponent', () => {
  let component: ViewSupplierDetailsComponent;
  let fixture: ComponentFixture<ViewSupplierDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSupplierDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSupplierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
