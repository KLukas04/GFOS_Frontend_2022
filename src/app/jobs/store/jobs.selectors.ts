import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromReducer from './jobs.reducer';

export const selectJobsState = createFeatureSelector<fromReducer.JobsState>(
  fromReducer.jobsFeatureKey
);

export const selectTrendJobs = createSelector(
  selectJobsState,
  (state: fromReducer.JobsState) => state.trends
);

export const selectAllFachgebiete = createSelector(
  selectJobsState,
  (state: fromReducer.JobsState) => state.fachgebiete
);

export const selectSingleJob = createSelector(
  selectJobsState,
  (state: fromReducer.JobsState) => state.singleJob
);

export const selectLetter = createSelector(
  selectJobsState,
  (state: fromReducer.JobsState) => state.letter
);

export const selectFilterData = createSelector(
  selectJobsState,
  (state: fromReducer.JobsState) => state.filter
);

export const selectFilterResults = createSelector(
  selectJobsState,
  (state: fromReducer.JobsState) => state.filterResults
);
