import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const newLoginEmail = createAction(
  '[Authorization] [Login] Email Inserted',
  props<{ email: string }>()
);

export const newLoginPassword = createAction(
  '[Authorization] [Login] Password Inserted',
  props<{ password: string }>()
);

export const tryLogin = createAction('[Authorization] [Login] Login Try');

export const tryLoginSuccess = createAction(
  '[Authorization] [Login] Login Success',
  props<{ token: string; isPersonaler: boolean }>()
);

export const tryLoginError = createAction(
  '[Authorization] [Login] Login Error',
  props<{ error: HttpErrorResponse }>()
);

export const newRegistrationFirstname = createAction(
  '[Authorization] [Registration] Firstname Inserted',
  props<{ firstname: string }>()
);

export const newRegistrationLastname = createAction(
  '[Authorization] [Registration] Lastname Inserted',
  props<{ lastname: string }>()
);

export const newRegistrationEmail = createAction(
  '[Authorization] [Registration] Email Inserted',
  props<{ email: string }>()
);

export const newRegistrationPassword = createAction(
  '[Authorization] [Registration] Password Inserted',
  props<{ password: string }>()
);

export const tryRegistration = createAction(
  '[Authorization] [Registration] Registration Try'
);

export const tryRegistrationSuccess = createAction(
  '[Authorization] [Registration] Registration Success'
);

export const tryRegistrationError = createAction(
  '[Authorization] [Registration] Registration Error',
  props<{ error: HttpErrorResponse }>()
);

export const newVerificationPin = createAction(
  '[Authorization] [Registration] Verificatin PIN Inserted',
  props<{ pin: string }>()
);

export const tryVerificationPin = createAction(
  '[Authorization] [Registration] Verification PIN Try'
);

export const tryVerificationPinSuccess = createAction(
  '[Authorization] [Registration] Verification PIN Success',
  props<{ token: string }>()
);

export const tryVerificationPinError = createAction(
  '[Authorization] [Registration] Verification PIN Error',
  props<{ error: HttpErrorResponse }>()
);

export const loginNeedTwoFa = createAction(
  '[Authorization] [Login] 2FA Pin Needed',
  props<{ isPersonaler: boolean }>()
);

export const newTwoFaPin = createAction(
  '[Authorization] [2FA] 2FA PIN Inserted',
  props<{ pin: string }>()
);

export const tryTwoFaPin = createAction('[Authorization] [2FA] 2FA PIN Try');

export const tryTwoFaSuccess = createAction(
  '[Authorization] [2FA] 2FA PIN Success',
  props<{ token: string }>()
);

export const tryTwoFaError = createAction(
  '[Authorization] [2FA] 2FA PIN Error',
  props<{ error: HttpErrorResponse }>()
);
