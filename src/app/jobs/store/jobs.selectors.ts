import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromReducer from './jobs.reducer';

export const selectJobsState = createFeatureSelector<fromReducer.JobsState>(
  fromReducer.jobsFeatureKey
);

export const selectTrendJobs = createSelector(
  selectJobsState,
  (state: fromReducer.JobsState) => state.trends
);
