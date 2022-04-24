import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, on } from '@ngrx/store';
import produce from 'immer';
import {
  failure,
  getOrElse,
  inProgress,
  notAsked,
  RemoteData,
  success,
} from 'ngx-remotedata';
import { LebenslaufStation } from '../models/lebenslaufstation.model';

import * as fromActions from './applicant.actions';

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

const applicantReducer = createReducer(
  initialState,
  on(fromActions.loadLebenslaufStationen, (state) =>
    produce(state, (draft) => {
      draft.lebenslauf.stationen = inProgress<
        LebenslaufStation[],
        HttpErrorResponse
      >(getOrElse(draft.lebenslauf.stationen, []));
    })
  ),
  on(fromActions.loadLebenslaufStationenSuccess, (state, { stationen }) =>
    produce(state, (draft) => {
      draft.lebenslauf.stationen = success<
        LebenslaufStation[],
        HttpErrorResponse
      >(stationen);
    })
  ),
  on(fromActions.loadLebenslaufStationenError, (state, { error }) =>
    produce(state, (draft) => {
      draft.lebenslauf.stationen = failure<
        LebenslaufStation[],
        HttpErrorResponse
      >(error);
    })
  )
);

export function reducer(state: ApplicantState | undefined, action: Action) {
  return applicantReducer(state, action);
}
