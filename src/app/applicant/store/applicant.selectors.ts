import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './applicant.reducer';

export const selectApplicantState =
  createFeatureSelector<fromReducer.ApplicantState>(
    fromReducer.applicantFeatureKey
  );

export const selectLebenslaufStationen = createSelector(
  selectApplicantState,
  (state: fromReducer.ApplicantState) => state.lebenslauf.stationen
);
