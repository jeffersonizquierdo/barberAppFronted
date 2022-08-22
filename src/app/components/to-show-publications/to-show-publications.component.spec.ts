import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToShowPublicationsComponent } from './to-show-publications.component';

describe('ToShowPublicationsComponent', () => {
  let component: ToShowPublicationsComponent;
  let fixture: ComponentFixture<ToShowPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToShowPublicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToShowPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
