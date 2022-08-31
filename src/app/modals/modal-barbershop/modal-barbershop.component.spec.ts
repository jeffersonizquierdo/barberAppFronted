import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBarbershopComponent } from './modal-barbershop.component';

describe('ModalBarbershopComponent', () => {
  let component: ModalBarbershopComponent;
  let fixture: ComponentFixture<ModalBarbershopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBarbershopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBarbershopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
