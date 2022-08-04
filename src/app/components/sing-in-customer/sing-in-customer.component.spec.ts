import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInCustomerComponent } from './sing-in-customer.component';

describe('SingInCustomerComponent', () => {
  let component: SingInCustomerComponent;
  let fixture: ComponentFixture<SingInCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingInCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingInCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
