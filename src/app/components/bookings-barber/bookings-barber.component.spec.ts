import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsBarberComponent } from './bookings-barber.component';

describe('BookingsBarberComponent', () => {
  let component: BookingsBarberComponent;
  let fixture: ComponentFixture<BookingsBarberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingsBarberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
