import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBarbershopComponent } from './header-barbershop.component';

describe('HeaderBarbershopComponent', () => {
  let component: HeaderBarbershopComponent;
  let fixture: ComponentFixture<HeaderBarbershopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBarbershopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBarbershopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
