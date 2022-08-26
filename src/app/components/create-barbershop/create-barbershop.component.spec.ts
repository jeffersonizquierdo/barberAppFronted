import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBarbershopComponent } from './create-barbershop.component';

describe('CreateBarbershopComponent', () => {
  let component: CreateBarbershopComponent;
  let fixture: ComponentFixture<CreateBarbershopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBarbershopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBarbershopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
