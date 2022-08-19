import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBarberComponent } from './list-barber.component';

describe('ListBarberComponent', () => {
  let component: ListBarberComponent;
  let fixture: ComponentFixture<ListBarberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBarberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
