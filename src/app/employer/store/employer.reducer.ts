import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, on } from '@ngrx/store';
import produce from 'immer';
import {
  failure,
  inProgress,
  notAsked,
  RemoteData,
  success,
} from 'ngx-remotedata';
import { Employer } from '../models/employer.model';
import { Todo } from '../models/todo.model';

import * as fromActions from './employer.actions';

export const employerFeatureKey = 'employer';

export interface EmployerState {
  todos: RemoteData<Todo[], HttpErrorResponse>;
  createNewTodo: string | null;
  onwAccount: RemoteData<Employer, HttpErrorResponse>;
}

export const initialState: EmployerState = {
  todos: notAsked(),
  createNewTodo: null,
  onwAccount: notAsked(),
};

const employerReducer = createReducer(
  initialState,
  on(fromActions.loadTodos, (state) =>
    produce(state, (draft) => {
      draft.todos = inProgress<Todo[], HttpErrorResponse>();
    })
  ),
  on(fromActions.loadTodosSuccess, (state, { todos }) =>
    produce(state, (draft) => {
      draft.todos = success<Todo[], HttpErrorResponse>(todos);
    })
  ),
  on(fromActions.loadTodosError, (state, { error }) =>
    produce(state, (draft) => {
      draft.todos = failure<Todo[], HttpErrorResponse>(error);
    })
  ),
  on(fromActions.newTodoInserted, (state, { todo }) =>
    produce(state, (draft) => {
      draft.createNewTodo = todo;
    })
  ),
  on(fromActions.loadSelf, (state) =>
    produce(state, (draft) => {
      draft.onwAccount = inProgress<Employer, HttpErrorResponse>();
    })
  ),
  on(fromActions.loadSelfSuccess, (state, { employer }) =>
    produce(state, (draft) => {
      draft.onwAccount = success<Employer, HttpErrorResponse>(employer);
    })
  ),
  on(fromActions.loadSelfError, (state, { error }) =>
    produce(state, (draft) => {
      draft.onwAccount = failure<Employer, HttpErrorResponse>(error);
    })
  )
);

export function reducer(state: EmployerState | undefined, action: Action) {
  return employerReducer(state, action);
}
