import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSupplierNavbarComponent } from './sub-supplier-navbar.component';

describe('SubSupplierNavbarComponent', () => {
  let component: SubSupplierNavbarComponent;
  let fixture: ComponentFixture<SubSupplierNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSupplierNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSupplierNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
