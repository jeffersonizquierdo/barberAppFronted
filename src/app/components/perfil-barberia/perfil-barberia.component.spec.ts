import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilBarberiaComponent } from './perfil-barberia.component';

describe('PerfilBarberiaComponent', () => {
  let component: PerfilBarberiaComponent;
  let fixture: ComponentFixture<PerfilBarberiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilBarberiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilBarberiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
