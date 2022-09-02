import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllBarberComponent } from './list-all-barber.component';

describe('ListAllBarberComponent', () => {
  let component: ListAllBarberComponent;
  let fixture: ComponentFixture<ListAllBarberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllBarberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
