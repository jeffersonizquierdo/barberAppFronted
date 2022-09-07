import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationBarberComponent } from './publication-barber.component';

describe('PublicationBarberComponent', () => {
  let component: PublicationBarberComponent;
  let fixture: ComponentFixture<PublicationBarberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationBarberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationBarberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
