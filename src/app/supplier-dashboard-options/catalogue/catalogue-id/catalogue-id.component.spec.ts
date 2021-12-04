import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueIdComponent } from './catalogue-id.component';

describe('CatalogueIdComponent', () => {
  let component: CatalogueIdComponent;
  let fixture: ComponentFixture<CatalogueIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
