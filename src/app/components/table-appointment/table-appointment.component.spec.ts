import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAppointmentComponent } from './table-appointment.component';

describe('TableAppointmentComponent', () => {
  let component: TableAppointmentComponent;
  let fixture: ComponentFixture<TableAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
