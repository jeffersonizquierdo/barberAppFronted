import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCutsComponent } from './manage-cuts.component';

describe('ManageCutsComponent', () => {
  let component: ManageCutsComponent;
  let fixture: ComponentFixture<ManageCutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
