import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBarberComponent } from './profile-barber.component';

describe('ProfileBarberComponent', () => {
  let component: ProfileBarberComponent;
  let fixture: ComponentFixture<ProfileBarberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileBarberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
