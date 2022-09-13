import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondingMessagesComponent } from './bonding-messages.component';

describe('BondingMessagesComponent', () => {
  let component: BondingMessagesComponent;
  let fixture: ComponentFixture<BondingMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BondingMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BondingMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
