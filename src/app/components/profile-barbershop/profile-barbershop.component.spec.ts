import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBarbershopComponent } from './profile-barbershop.component';

describe('ProfileBarbershopComponent', () => {
  let component: ProfileBarbershopComponent;
  let fixture: ComponentFixture<ProfileBarbershopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileBarbershopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBarbershopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
