import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbershopMeshShiftsComponent } from './barbershop-mesh-shifts.component';

describe('BarbershopMeshShiftsComponent', () => {
  let component: BarbershopMeshShiftsComponent;
  let fixture: ComponentFixture<BarbershopMeshShiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarbershopMeshShiftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarbershopMeshShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
