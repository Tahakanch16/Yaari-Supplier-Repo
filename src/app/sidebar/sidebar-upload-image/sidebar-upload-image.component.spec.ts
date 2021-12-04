import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarUploadImageComponent } from './sidebar-upload-image.component';

describe('SidebarUploadImageComponent', () => {
  let component: SidebarUploadImageComponent;
  let fixture: ComponentFixture<SidebarUploadImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarUploadImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarUploadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
