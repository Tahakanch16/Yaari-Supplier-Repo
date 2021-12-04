import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProductCatalogueComponent } from './upload-product-catalogue.component';

describe('UploadProductCatalogueComponent', () => {
  let component: UploadProductCatalogueComponent;
  let fixture: ComponentFixture<UploadProductCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadProductCatalogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadProductCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
