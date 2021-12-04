import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubContactUsComponent } from './sub-contact-us.component';

describe('SubContactUsComponent', () => {
  let component: SubContactUsComponent;
  let fixture: ComponentFixture<SubContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
