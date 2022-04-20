import { Action, createReducer, on } from '@ngrx/store';
import produce from 'immer';
import { LoginCreds } from '../models/loginCreds.model';

import * as fromActions from './authorization.actions';

export const authorizationFeatureKey = 'authorization';

export interface AuthorizationState {
  loginCreds: LoginCreds;
}

export const initialState: AuthorizationState = {
  loginCreds: {
    email: '',
    password: '',
  },
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
  )
);

export function reducer(state: AuthorizationState | undefined, action: Action) {
  return authorizationReducer(state, action);
}
