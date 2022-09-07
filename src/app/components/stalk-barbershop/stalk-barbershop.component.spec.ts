import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StalkBarbershopComponent } from './stalk-barbershop.component';

describe('StalkBarbershopComponent', () => {
  let component: StalkBarbershopComponent;
  let fixture: ComponentFixture<StalkBarbershopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StalkBarbershopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StalkBarbershopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
