import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartedApplicationsComponent } from './started-applications.component';

describe('StartedApplicationsComponent', () => {
  let component: StartedApplicationsComponent;
  let fixture: ComponentFixture<StartedApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartedApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartedApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
