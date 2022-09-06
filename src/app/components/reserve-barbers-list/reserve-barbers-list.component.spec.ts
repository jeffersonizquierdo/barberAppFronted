import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveBarbersListComponent } from './reserve-barbers-list.component';

describe('ReserveBarbersListComponent', () => {
  let component: ReserveBarbersListComponent;
  let fixture: ComponentFixture<ReserveBarbersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveBarbersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveBarbersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
