import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsForJobComponent } from './applications-for-job.component';

describe('ApplicationsForJobComponent', () => {
  let component: ApplicationsForJobComponent;
  let fixture: ComponentFixture<ApplicationsForJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationsForJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsForJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
