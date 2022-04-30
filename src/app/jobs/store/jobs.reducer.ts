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
import { Fachgebiet } from '../models/fachgebiet.model';
import { Job } from '../models/job.model';

import * as fromActions from './jobs.actions';

export const jobsFeatureKey = 'jobs';

export interface JobsState {
  trends: RemoteData<Job[], HttpErrorResponse>;
  fachgebiete: RemoteData<Fachgebiet[], HttpErrorResponse>;
  singleJob: RemoteData<Job, HttpErrorResponse>;
}

export const initialState: JobsState = {
  trends: notAsked(),
  fachgebiete: notAsked(),
  singleJob: notAsked(),
};

const jobsReducer = createReducer(
  initialState,
  on(fromActions.loadTrendJobs, (state) =>
    produce(state, (draft) => {
      draft.trends = inProgress<Job[], HttpErrorResponse>(
        getOrElse(draft.trends, [])
      );
    })
  ),
  on(fromActions.loadTrendJobsSuccess, (state, { jobs }) =>
    produce(state, (draft) => {
      draft.trends = success<Job[], HttpErrorResponse>(jobs);
    })
  ),
  on(fromActions.loadTrendJobsError, (state, { error }) =>
    produce(state, (draft) => {
      draft.trends = failure<Job[], HttpErrorResponse>(error);
    })
  ),
  on(fromActions.loadFachgebiete, (state) =>
    produce(state, (draft) => {
      draft.fachgebiete = inProgress<Fachgebiet[], HttpErrorResponse>(
        getOrElse(draft.fachgebiete, [])
      );
    })
  ),
  on(fromActions.loadFachgebieteSuccess, (state, { fachgebiete }) =>
    produce(state, (draft) => {
      draft.fachgebiete = success<Fachgebiet[], HttpErrorResponse>(fachgebiete);
    })
  ),
  on(fromActions.loadFachgebieteError, (state, { error }) =>
    produce(state, (draft) => {
      draft.fachgebiete = failure<Fachgebiet[], HttpErrorResponse>(error);
    })
  ),
  on(fromActions.loadSingleJob, (state) =>
    produce(state, (draft) => {
      draft.singleJob = inProgress<Job, HttpErrorResponse>(
        getOrElse(draft.singleJob, undefined)
      );
    })
  ),
  on(fromActions.loadSingleJobSuccess, (state, { job }) =>
    produce(state, (draft) => {
      draft.singleJob = success<Job, HttpErrorResponse>(job);
    })
  ),
  on(fromActions.loadSingleJobError, (state, { error }) =>
    produce(state, (draft) => {
      draft.singleJob = failure<Job, HttpErrorResponse>(error);
    })
  )
);

export function reducer(state: JobsState | undefined, action: Action) {
  return jobsReducer(state, action);
}
