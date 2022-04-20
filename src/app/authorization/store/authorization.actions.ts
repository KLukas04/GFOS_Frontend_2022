import { createAction, props } from '@ngrx/store';

export const newLoginEmail = createAction(
  '[Authorization] [Login] Email Inserted',
  props<{ email: string }>()
);

export const newLoginPassword = createAction(
  '[Authorization] [Login] Password Inserted',
  props<{ password: string }>()
);
