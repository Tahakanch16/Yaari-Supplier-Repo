import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityScorecardComponent } from './quality-scorecard.component';

describe('QualityScorecardComponent', () => {
  let component: QualityScorecardComponent;
  let fixture: ComponentFixture<QualityScorecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityScorecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityScorecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
