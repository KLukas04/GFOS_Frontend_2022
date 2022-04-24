import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer } from '@ngrx/store';
import { notAsked, RemoteData } from 'ngx-remotedata';
import { LebenslaufStation } from '../models/lebenslaufstation.model';

export const applicantFeatureKey = 'applicant';

export interface ApplicantState {
  lebenslauf: {
    stationen: RemoteData<LebenslaufStation[], HttpErrorResponse>;
  };
}

export const initialState: ApplicantState = {
  lebenslauf: {
    stationen: notAsked(),
  },
};

const applicantReducer = createReducer(initialState);

export function reducer(state: ApplicantState | undefined, action: Action) {
  return applicantReducer(state, action);
}
