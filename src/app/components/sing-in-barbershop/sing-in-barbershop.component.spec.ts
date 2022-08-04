import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInBarbershopComponent } from './sing-in-barbershop.component';

describe('SingInBarbershopComponent', () => {
  let component: SingInBarbershopComponent;
  let fixture: ComponentFixture<SingInBarbershopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingInBarbershopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingInBarbershopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
