import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidbarImageComponent } from './sidbar-image.component';

describe('SidbarImageComponent', () => {
  let component: SidbarImageComponent;
  let fixture: ComponentFixture<SidbarImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidbarImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidbarImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
