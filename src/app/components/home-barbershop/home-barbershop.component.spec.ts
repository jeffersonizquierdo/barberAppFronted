import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBarbershopComponent } from './home-barbershop.component';

describe('HomeBarbershopComponent', () => {
  let component: HomeBarbershopComponent;
  let fixture: ComponentFixture<HomeBarbershopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBarbershopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBarbershopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
