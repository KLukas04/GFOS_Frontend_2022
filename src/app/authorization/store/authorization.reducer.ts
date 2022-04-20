import { Action, createReducer, on } from '@ngrx/store';
import produce from 'immer';

import * as fromActions from './authorization.actions';

export const authorizationFeatureKey = 'authorization';

export interface AuthorizationState {
  loginEmail: string | null;
  loginPassword: string | null;
}

export const initialState: AuthorizationState = {
  loginEmail: null,
  loginPassword: null,
};

const authorizationReducer = createReducer(
  initialState,
  on(fromActions.newLoginEmail, (state, { email }) =>
    produce(state, (draft) => {
      draft.loginEmail = email;
    })
  ),
  on(fromActions.newLoginPassword, (state, { password }) =>
    produce(state, (draft) => {
      draft.loginPassword = password;
    })
  )
);

export function reducer(state: AuthorizationState | undefined, action: Action) {
  return authorizationReducer(state, action);
}
