import { createFeatureSelector, createSelector } from '@ngrx/store';
import { map } from 'ngx-remotedata';
import { Bewerbung } from '../models/bewerbung.model';
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

export const selectChangeAccountData = createSelector(
  selectApplicantState,
  (state: fromReducer.ApplicantState) => state.lebenslauf.changeKontakt
);

export const selectOwnAddress = createSelector(
  selectApplicantState,
  (state: fromReducer.ApplicantState) => state.lebenslauf.adresse
);

export const selectChangeAddressData = createSelector(
  selectApplicantState,
  (state: fromReducer.ApplicantState) => state.lebenslauf.changeAddress
);

export const selectOwnSettings = createSelector(
  selectApplicantState,
  (state: fromReducer.ApplicantState) => state.lebenslauf.settings
);

export const selectChangeSettingsData = createSelector(
  selectApplicantState,
  (state: fromReducer.ApplicantState) => state.lebenslauf.changeSettings
);

export const selectSentApplications = createSelector(
  selectApplicantState,
  (state: fromReducer.ApplicantState) => state.sentApplications
);

export const selectProfilePic = createSelector(
  selectApplicantState,
  (state: fromReducer.ApplicantState) => state.lebenslauf.profilePic
);

export const selectCvPdf = createSelector(
  selectApplicantState,
  (state: fromReducer.ApplicantState) => state.lebenslauf.pdf
);

export const selectFachgebiet = createSelector(
  selectApplicantState,
  (state: fromReducer.ApplicantState) => state.lebenslauf.fachgebiet
);
