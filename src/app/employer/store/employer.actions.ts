import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Employer } from '../models/employer.model';
import { Todo } from '../models/todo.model';

export const loadTodos = createAction('[Employer] [Todos] Load Todos');

export const loadTodosSuccess = createAction(
  '[Employer] [Todos] Load Todos Success',
  props<{ todos: Todo[] }>()
);

export const loadTodosError = createAction(
  '[Employer] [Todos] Load Todos Error',
  props<{ error: HttpErrorResponse }>()
);

export const newTodoInserted = createAction(
  '[Employer] [Todos] New Todo Inserted',
  props<{ todo: string }>()
);

export const saveNewTodo = createAction('[Employer] [Todos] Save New Todo');

export const deleteTodo = createAction(
  '[Employer] [Todos] Delete Todo',
  props<{ id: number }>()
);

export const loadSelf = createAction('[Employer] [Account] Load Self');

export const loadSelfSuccess = createAction(
  '[Employer] [Account] Load Self Success',
  props<{ employer: Employer }>()
);

export const loadSelfError = createAction(
  '[Employer] [Account] Load Self Error',
  props<{ error: HttpErrorResponse }>()
);

export const newEmployerFirstNameInserted = createAction(
  '[Employer] [New Employer] Firstname Inserted',
  props<{ firstName: string }>()
);

export const newEmployerLastNameInserted = createAction(
  '[Employer] [New Employer] Lastname Inserted',
  props<{ lastName: string }>()
);

export const newEmployerEmailInserted = createAction(
  '[Employer] [New Employer] Email Inserted',
  props<{ email: string }>()
);

export const newEmployerPhoneInserted = createAction(
  '[Employer] [New Employer] Phone Inserted',
  props<{ phone: string }>()
);

export const newEmployerPasswordInserted = createAction(
  '[Employer] [New Employer] Password Inserted',
  props<{ password: string }>()
);

export const newEmployerSectionInserted = createAction(
  '[Employer] [New Employer] Section Inserted',
  props<{ section: string }>()
);

export const saveNewEmployer = createAction(
  '[Employer] [New Employer] Save New Employer'
);
