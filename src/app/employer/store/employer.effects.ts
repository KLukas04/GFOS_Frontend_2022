import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { AccountService } from '../service/account.service';
import { TodoService } from '../service/todo.service';

import * as fromActions from './employer.actions';
import * as fromReducer from './employer.reducer';
import * as fromSelectors from './employer.selectors';
@Injectable()
export class EmployerEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromReducer.EmployerState>,
    private router: Router,
    private todoService: TodoService,
    private accountService: AccountService
  ) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadTodos),
      mergeMap(() =>
        this.todoService.getTodos().pipe(
          map((todos) => fromActions.loadTodosSuccess({ todos: todos })),
          catchError((err) => of(fromActions.loadTodosError({ error: err })))
        )
      )
    )
  );

  saveNewTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.saveNewTodo),
      concatLatestFrom(() =>
        this.store.select(fromSelectors.selectNewTodoData)
      ),
      switchMap(([_, data]) =>
        this.todoService.addTodo(data!).pipe(map(() => fromActions.loadTodos()))
      )
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.deleteTodo),
      mergeMap((action) =>
        this.todoService
          .deleteTodo(action.id)
          .pipe(map(() => fromActions.loadTodos()))
      )
    )
  );

  loadOwnAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadSelf),
      mergeMap(() =>
        this.accountService.getSelf().pipe(
          map((acc) => fromActions.loadSelfSuccess({ employer: acc })),
          catchError((err) => of(fromActions.loadSelfError({ error: err })))
        )
      )
    )
  );

  saveNewEmployer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.saveNewEmployer),
      concatLatestFrom(() =>
        this.store.select(fromSelectors.selectNewEmployerData)
      ),
      switchMap(([_, data]) =>
        this.accountService.saveNewEmployer(data).pipe(
          map(() => {
            this.router.navigateByUrl('employer');
            return fromActions.saveNewEmployerSuccess();
          }),
          catchError(() => of(fromActions.saveNewEmployerError()))
        )
      )
    )
  );
}
