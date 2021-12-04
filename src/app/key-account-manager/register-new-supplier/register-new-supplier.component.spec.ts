import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewSupplierComponent } from './register-new-supplier.component';

describe('RegisterNewSupplierComponent', () => {
  let component: RegisterNewSupplierComponent;
  let fixture: ComponentFixture<RegisterNewSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterNewSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNewSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
