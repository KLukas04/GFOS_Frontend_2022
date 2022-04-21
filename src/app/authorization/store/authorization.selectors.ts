import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromReducer from './authorization.reducer';

export const selectAuthorizationState =
  createFeatureSelector<fromReducer.AuthorizationState>(
    fromReducer.authorizationFeatureKey
  );

export const selectLoginCreds = createSelector(
  selectAuthorizationState,
  (state: fromReducer.AuthorizationState) => state.loginCreds
);

export const selectRegistrationData = createSelector(
  selectAuthorizationState,
  (state: fromReducer.AuthorizationState) => state.registrationData
);
