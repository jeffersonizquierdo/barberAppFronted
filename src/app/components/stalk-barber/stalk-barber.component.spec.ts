import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StalkBarberComponent } from './stalk-barber.component';

describe('StalkBarberComponent', () => {
  let component: StalkBarberComponent;
  let fixture: ComponentFixture<StalkBarberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StalkBarberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StalkBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
