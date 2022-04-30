import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ApplicationDetails } from '../models/applicationDetails.model';
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

export const selectApplicationDetails = createSelector(
  selectEmployerState,
  (state: fromReducer.EmployerState) => state.applicationDetails
);

export const selectDetailsImage = createSelector(
  selectApplicationDetails,
  (details: ApplicationDetails) => details.image
);

export const selectDetailsCv = createSelector(
  selectApplicationDetails,
  (details: ApplicationDetails) => details.cvPdf
);

export const selectDetailsLetter = createSelector(
  selectApplicationDetails,
  (details: ApplicationDetails) => details.letterPdf
);

export const selectDetailsApplicant = createSelector(
  selectApplicationDetails,
  (details: ApplicationDetails) => details.applicant
);

export const selectDetailsInterest = createSelector(
  selectApplicationDetails,
  (details: ApplicationDetails) => details.interests
);
