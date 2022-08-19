import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCutsComponent } from './upload-cuts.component';

describe('UploadCutsComponent', () => {
  let component: UploadCutsComponent;
  let fixture: ComponentFixture<UploadCutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
