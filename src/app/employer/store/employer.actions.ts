import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
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
