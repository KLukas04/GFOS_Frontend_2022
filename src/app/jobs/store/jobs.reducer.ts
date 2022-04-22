import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer } from '@ngrx/store';
import { notAsked, RemoteData } from 'ngx-remotedata';
import { Job } from '../models/job.model';

export const jobsFeatureKey = 'jobs';

export interface JobsState {
  trends: RemoteData<Job[], HttpErrorResponse>;
}

export const initialState: JobsState = {
  trends: notAsked(),
};

const jobsReducer = createReducer(initialState);

export function reducer(state: JobsState | undefined, action: Action) {
  return jobsReducer(state, action);
}
