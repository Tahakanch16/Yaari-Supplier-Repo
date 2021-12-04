import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueSpecificationComponent } from './catalogue-specification.component';

describe('CatalogueSpecificationComponent', () => {
  let component: CatalogueSpecificationComponent;
  let fixture: ComponentFixture<CatalogueSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueSpecificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
