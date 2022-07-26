import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberMeshShiftsComponent } from './barber-mesh-shifts.component';

describe('BarberMeshShiftsComponent', () => {
  let component: BarberMeshShiftsComponent;
  let fixture: ComponentFixture<BarberMeshShiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarberMeshShiftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarberMeshShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
