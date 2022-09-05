import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationBarbershopComponent } from './publication-barbershop.component';

describe('PublicationBarbershopComponent', () => {
  let component: PublicationBarbershopComponent;
  let fixture: ComponentFixture<PublicationBarbershopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationBarbershopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationBarbershopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
