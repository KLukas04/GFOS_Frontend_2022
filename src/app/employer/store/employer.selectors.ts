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
