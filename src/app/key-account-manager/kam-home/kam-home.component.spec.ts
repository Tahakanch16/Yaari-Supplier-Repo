import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamHomeComponent } from './kam-home.component';

describe('KamHomeComponent', () => {
  let component: KamHomeComponent;
  let fixture: ComponentFixture<KamHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KamHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KamHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
