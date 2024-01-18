import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDropzoneComponent } from './app-dropzone.component';

describe('AppDropzoneComponent', () => {
  let component: AppDropzoneComponent;
  let fixture: ComponentFixture<AppDropzoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDropzoneComponent]
    });
    fixture = TestBed.createComponent(AppDropzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
