import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPublicityComponent } from './load-publicity.component';

describe('LoadPublicityComponent', () => {
  let component: LoadPublicityComponent;
  let fixture: ComponentFixture<LoadPublicityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadPublicityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadPublicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
