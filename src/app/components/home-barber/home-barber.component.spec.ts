import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBarberComponent } from './home-barber.component';

describe('HomeBarberComponent', () => {
  let component: HomeBarberComponent;
  let fixture: ComponentFixture<HomeBarberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBarberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
