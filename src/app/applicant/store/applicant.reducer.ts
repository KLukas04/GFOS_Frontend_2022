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
import { Interessenfeld } from '../models/interessenfeld.model';
import { LebenslaufStation } from '../models/lebenslaufstation.model';

import * as fromActions from './applicant.actions';

export const applicantFeatureKey = 'applicant';

export interface ApplicantState {
  lebenslauf: {
    stationen: RemoteData<LebenslaufStation[], HttpErrorResponse>;
    createNewStation: {
      start: Date | null;
      end: Date | null;
      info: string | null;
    };
    interessenfelder: RemoteData<Interessenfeld[], HttpErrorResponse>;
  };
}

export const initialState: ApplicantState = {
  lebenslauf: {
    stationen: notAsked(),
    createNewStation: {
      start: null,
      end: null,
      info: null,
    },
    interessenfelder: notAsked(),
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
  ),
  on(fromActions.newLebenslaufStationStartEnd, (state, { date }) =>
    produce(state, (draft) => {
      const start: Date = new Date(
        date.from.year,
        date.from.month,
        date.from.day
      );
      const end: Date = new Date(date.to.year, date.to.month, date.to.day);

      draft.lebenslauf.createNewStation.start = start;
      draft.lebenslauf.createNewStation.end = end;
    })
  ),
  on(fromActions.newLebenslaufStationInfo, (state, { info }) =>
    produce(state, (draft) => {
      draft.lebenslauf.createNewStation.info = info;
    })
  ),
  on(fromActions.loadInteressenfelder, (state) =>
    produce(state, (draft) => {
      draft.lebenslauf.interessenfelder = inProgress<
        Interessenfeld[],
        HttpErrorResponse
      >(getOrElse(draft.lebenslauf.interessenfelder, []));
    })
  ),
  on(fromActions.loadInteressenfelderSuccess, (state, { felder }) =>
    produce(state, (draft) => {
      draft.lebenslauf.interessenfelder = success<
        Interessenfeld[],
        HttpErrorResponse
      >(felder);
    })
  ),
  on(fromActions.loadInteressenfelderError, (state, { error }) =>
    produce(state, (draft) => {
      draft.lebenslauf.interessenfelder = failure<
        Interessenfeld[],
        HttpErrorResponse
      >(error);
    })
  )
);

export function reducer(state: ApplicantState | undefined, action: Action) {
  return applicantReducer(state, action);
}
