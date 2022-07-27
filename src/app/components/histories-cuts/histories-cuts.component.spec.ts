import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriesCutsComponent } from './histories-cuts.component';

describe('HistoriesCutsComponent', () => {



  let component: HistoriesCutsComponent;
  let fixture: ComponentFixture<HistoriesCutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriesCutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriesCutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
