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
