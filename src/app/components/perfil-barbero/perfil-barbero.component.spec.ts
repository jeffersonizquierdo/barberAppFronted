import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilBarberoComponent } from './perfil-barbero.component';

describe('PerfilBarberoComponent', () => {
  let component: PerfilBarberoComponent;
  let fixture: ComponentFixture<PerfilBarberoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilBarberoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilBarberoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
