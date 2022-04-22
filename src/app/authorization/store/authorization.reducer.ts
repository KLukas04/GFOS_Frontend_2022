import { Action, createReducer, on } from '@ngrx/store';
import produce from 'immer';
import { LoginCreds } from '../models/loginCreds.model';
import { RegistrationData } from '../models/registrationData.model';

import * as fromActions from './authorization.actions';

export const authorizationFeatureKey = 'authorization';

export interface AuthorizationState {
  loginCreds: LoginCreds;
  token: string | null;
  registrationData: RegistrationData;
  verificationPin: string;
}

export const initialState: AuthorizationState = {
  loginCreds: {
    email: '',
    password: '',
  },
  token: null,
  registrationData: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  },
  verificationPin: '',
};

const authorizationReducer = createReducer(
  initialState,
  on(fromActions.newLoginEmail, (state, { email }) =>
    produce(state, (draft) => {
      draft.loginCreds.email = email;
    })
  ),
  on(fromActions.newLoginPassword, (state, { password }) =>
    produce(state, (draft) => {
      draft.loginCreds.password = password;
    })
  ),
  on(fromActions.tryLoginSuccess, (state, { token }) =>
    produce(state, (draft) => {
      draft.token = token;
    })
  ),
  on(fromActions.newRegistrationFirstname, (state, { firstname }) =>
    produce(state, (draft) => {
      if (draft.registrationData) {
        draft.registrationData.firstname = firstname;
      }
    })
  ),
  on(fromActions.newRegistrationLastname, (state, { lastname }) =>
    produce(state, (draft) => {
      if (draft.registrationData) {
        draft.registrationData.lastname = lastname;
      }
    })
  ),
  on(fromActions.newRegistrationEmail, (state, { email }) =>
    produce(state, (draft) => {
      if (draft.registrationData) {
        draft.registrationData.email = email;
      }
    })
  ),
  on(fromActions.newRegistrationPassword, (state, { password }) =>
    produce(state, (draft) => {
      if (draft.registrationData) {
        draft.registrationData.password = password;
      }
    })
  ),
  on(fromActions.newVerificationPin, (state, { pin }) =>
    produce(state, (draft) => {
      draft.verificationPin = pin;
    })
  ),
  on(fromActions.tryVerificationPinSuccess, (state, { token }) =>
    produce(state, (draft) => {
      draft.token = token;
    })
  )
);

export function reducer(state: AuthorizationState | undefined, action: Action) {
  return authorizationReducer(state, action);
}
