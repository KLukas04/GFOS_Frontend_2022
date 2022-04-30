import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './employer.reducer';

export const selectEmployerState =
  createFeatureSelector<fromReducer.EmployerState>(
    fromReducer.employerFeatureKey
  );

export const selectTodos = createSelector(
  selectEmployerState,
  (state: fromReducer.EmployerState) => state.todos
);

export const selectNewTodoData = createSelector(
  selectEmployerState,
  (state: fromReducer.EmployerState) => state.createNewTodo
);

export const selectOwnAccount = createSelector(
  selectEmployerState,
  (state: fromReducer.EmployerState) => state.onwAccount
);

export const selectNewEmployerData = createSelector(
  selectEmployerState,
  (state: fromReducer.EmployerState) => state.createNewEmployer
);

export const selectNewJobData = createSelector(
  selectEmployerState,
  (state: fromReducer.EmployerState) => state.createNewJob
);

export const selectCreatedJobs = createSelector(
  selectEmployerState,
  (state: fromReducer.EmployerState) => state.createdJobs
);

export const selectApplications = createSelector(
  selectEmployerState,
  (state: fromReducer.EmployerState) => state.applications
);

export const selectApplicationsForJob = createSelector(
  selectEmployerState,
  (state: fromReducer.EmployerState) => state.applicationsForJob
);
