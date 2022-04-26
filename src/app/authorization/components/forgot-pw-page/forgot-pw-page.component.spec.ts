import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPwPageComponent } from './forgot-pw-page.component';

describe('ForgotPwPageComponent', () => {
  let component: ForgotPwPageComponent;
  let fixture: ComponentFixture<ForgotPwPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPwPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPwPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
