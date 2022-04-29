import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPwDialogComponent } from './forgot-pw-dialog.component';

describe('ForgotPwDialogComponent', () => {
  let component: ForgotPwDialogComponent;
  let fixture: ComponentFixture<ForgotPwDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPwDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPwDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
