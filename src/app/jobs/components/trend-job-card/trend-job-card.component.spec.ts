import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendJobCardComponent } from './trend-job-card.component';

describe('TrendJobCardComponent', () => {
  let component: TrendJobCardComponent;
  let fixture: ComponentFixture<TrendJobCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendJobCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
