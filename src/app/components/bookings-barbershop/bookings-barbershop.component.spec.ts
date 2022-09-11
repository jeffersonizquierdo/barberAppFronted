import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsBarbershopComponent } from './bookings-barbershop.component';

describe('BookingsBarbershopComponent', () => {
  let component: BookingsBarbershopComponent;
  let fixture: ComponentFixture<BookingsBarbershopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingsBarbershopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsBarbershopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
