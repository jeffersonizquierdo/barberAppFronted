import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInBarberComponent } from './sing-in-barber.component';

describe('SingInBarberComponent', () => {
  let component: SingInBarberComponent;
  let fixture: ComponentFixture<SingInBarberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingInBarberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingInBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
