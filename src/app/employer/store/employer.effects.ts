import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { AccountService } from '../service/account.service';
import { JobService } from '../service/job.service';
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
    private accountService: AccountService,
    private jobService: JobService
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

  saveNewJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.saveNewJob),
      concatLatestFrom(() => this.store.select(fromSelectors.selectNewJobData)),
      switchMap(([_, data]) =>
        this.jobService
          .createNewJob(
            data.basics.title!,
            data.shortDescription!,
            data.description!,
            data.wageMonth!,
            data.wageYear!,
            data.vacation!,
            data.remote,
            data.advantages!,
            data.basics.startDate!,
            data.basics.deadline!,
            data.basics.temporary,
            data.basics.startDate,
            data.basics.end!,
            data.address.street!,
            data.address.number!,
            data.address.plz!,
            data.address.town!,
            data.address.country!,
            data.basics.type!,
            data.basics.section!
          )
          .pipe(
            map(() => {
              this.router.navigateByUrl('employer');
              return fromActions.saveNewJobSuccess();
            }),
            catchError(() => of(fromActions.saveNewJobError()))
          )
      )
    )
  );

  loadCreatedJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadCreatedJobs),
      mergeMap(() =>
        this.jobService.getCreatedJobs().pipe(
          map((jobs) => fromActions.loadCreatedJobsSuccess({ jobs: jobs })),
          catchError((err) =>
            of(fromActions.loadCreatedJobsError({ error: err }))
          )
        )
      )
    )
  );

  deleteJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.deleteJob),
      mergeMap((action) =>
        this.jobService
          .deleteJob(action.id)
          .pipe(map(() => fromActions.loadCreatedJobs()))
      )
    )
  );

  pinJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.pinJob),
      mergeMap((action) =>
        this.jobService
          .pinJob(action.id)
          .pipe(map(() => fromActions.loadCreatedJobs()))
      )
    )
  );

  unpinJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.unpinJob),
      mergeMap((action) =>
        this.jobService
          .unpinJob(action.id)
          .pipe(map(() => fromActions.loadCreatedJobs()))
      )
    )
  );
}
