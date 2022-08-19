import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBarbershopComponent } from './list-barbershop.component';

describe('ListBarbershopComponent', () => {
  let component: ListBarbershopComponent;
  let fixture: ComponentFixture<ListBarbershopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBarbershopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBarbershopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
