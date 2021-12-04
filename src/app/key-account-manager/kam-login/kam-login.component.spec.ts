import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamLoginComponent } from './kam-login.component';

describe('KamLoginComponent', () => {
  let component: KamLoginComponent;
  let fixture: ComponentFixture<KamLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KamLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KamLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
