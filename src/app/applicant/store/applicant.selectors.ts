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

export const selectNewStationData = createSelector(
  selectApplicantState,
  (state: fromReducer.ApplicantState) => state.lebenslauf.createNewStation
);

export const selectInteressenfelder = createSelector(
  selectApplicantState,
  (state: fromReducer.ApplicantState) => state.lebenslauf.interessenfelder
);

export const selectNewInteresseData = createSelector(
  selectApplicantState,
  (state: fromReducer.ApplicantState) => state.lebenslauf.createNewInteresse
);

export const selectOwnAccount = createSelector(
  selectApplicantState,
  (state: fromReducer.ApplicantState) => state.lebenslauf.kontakt
);
