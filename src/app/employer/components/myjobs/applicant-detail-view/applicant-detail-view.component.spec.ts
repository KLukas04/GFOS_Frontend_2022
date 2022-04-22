import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantDetailViewComponent } from './applicant-detail-view.component';

describe('ApplicantDetailViewComponent', () => {
  let component: ApplicantDetailViewComponent;
  let fixture: ComponentFixture<ApplicantDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
