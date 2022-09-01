import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBarberComponent } from './modal-barber.component';

describe('ModalBarberComponent', () => {
  let component: ModalBarberComponent;
  let fixture: ComponentFixture<ModalBarberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBarberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
