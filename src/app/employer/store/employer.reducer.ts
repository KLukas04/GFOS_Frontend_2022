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
  createNewEmployer: {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
    password: string | null;
    section: string | null;
  };
  createNewJob: {
    basics: {
      title: string | null;
      type: string | null;
      section: string | null;
      deadline: Date | null;
      startDate: Date | null;
      temporary: boolean;
      start: Date | null;
      end: Date | null;
    };
    address: {
      street: string | null;
      number: string | null;
      plz: number | null;
      town: string | null;
      country: string | null;
    };
    shortDescription: string | null;
    description: string | null;
    vacation: number | null;
    remote: boolean;
    wageMonth: number | null;
    wageYear: number | null;
    advantages: string | null;
  };
}

export const initialState: EmployerState = {
  todos: notAsked(),
  createNewTodo: null,
  onwAccount: notAsked(),
  createNewEmployer: {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    password: null,
    section: null,
  },
  createNewJob: {
    basics: {
      title: null,
      type: null,
      section: null,
      deadline: null,
      startDate: null,
      temporary: false,
      start: null,
      end: null,
    },
    address: {
      street: null,
      number: null,
      plz: null,
      town: null,
      country: null,
    },
    shortDescription: null,
    description: null,
    vacation: null,
    remote: false,
    wageMonth: null,
    wageYear: null,
    advantages: null,
  },
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
  ),
  on(fromActions.newEmployerFirstNameInserted, (state, { firstName }) =>
    produce(state, (draft) => {
      draft.createNewEmployer.firstName = firstName;
    })
  ),
  on(fromActions.newEmployerLastNameInserted, (state, { lastName }) =>
    produce(state, (draft) => {
      draft.createNewEmployer.lastName = lastName;
    })
  ),
  on(fromActions.newEmployerEmailInserted, (state, { email }) =>
    produce(state, (draft) => {
      draft.createNewEmployer.email = email;
    })
  ),
  on(fromActions.newEmployerPhoneInserted, (state, { phone }) =>
    produce(state, (draft) => {
      draft.createNewEmployer.phone = phone;
    })
  ),
  on(fromActions.newEmployerPasswordInserted, (state, { password }) =>
    produce(state, (draft) => {
      draft.createNewEmployer.password = password;
    })
  ),
  on(fromActions.newEmployerSectionInserted, (state, { section }) =>
    produce(state, (draft) => {
      draft.createNewEmployer.section = section;
    })
  )
);

export function reducer(state: EmployerState | undefined, action: Action) {
  return employerReducer(state, action);
}
