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
  props<{ token: string }>()
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
