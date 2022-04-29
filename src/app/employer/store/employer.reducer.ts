import { Action, createReducer } from '@ngrx/store';

export const employerFeatureKey = 'employer';

export interface EmployerState {
  todos: string[];
}

export const initialState: EmployerState = {
  todos: [],
};

const employerReducer = createReducer(initialState);

export function reducer(state: EmployerState | undefined, action: Action) {
  return employerReducer(state, action);
}
