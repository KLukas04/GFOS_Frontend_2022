import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { AccountService } from '../service/account.service';
import { ApplicationService } from '../service/application.service';
import { JobService } from '../service/job.service';
import { TodoService } from '../service/todo.service';

import * as fromActions from './employer.actions';
import * as fromReducer from './employer.reducer';
import * as fromSelectors from './employer.selectors';
import * as fromRouter from '../../store/router.selectors';
@Injectable()
export class EmployerEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromReducer.EmployerState>,
    private router: Router,
    private todoService: TodoService,
    private accountService: AccountService,
    private jobService: JobService,
    private applicationService: ApplicationService
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

  loadApplicationsForJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadApplicationsForJob),
      concatLatestFrom(() => this.store.select(fromRouter.selectQueryParams)),
      switchMap(([_, params]) =>
        this.applicationService.getApplicationsForJob(params['jobId']).pipe(
          tap(() => console.log(params['jobId'])),
          map((applications) =>
            fromActions.loadApplicationsForJobSuccess({
              applications: applications,
            })
          ),
          catchError((err) =>
            of(fromActions.loadApplicationsForJobError({ error: err }))
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

  loadApplications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadApplications),
      mergeMap(() =>
        this.applicationService.getEditableApplications().pipe(
          map((applications) =>
            fromActions.loadApplicationsSuccess({ applications: applications })
          ),
          catchError((err) =>
            of(fromActions.loadApplicationsError({ error: err }))
          )
        )
      )
    )
  );

  loadApplicationDetailsImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadApplicationDetailsImage),
      concatLatestFrom(() => this.store.select(fromRouter.selectQueryParams)),
      switchMap(([_, params]) =>
        this.accountService.getPicById(params['bewerberId']).pipe(
          map((pic) =>
            fromActions.loadApplicationDetailsImageSuccess({ base64: pic })
          ),
          catchError((err) =>
            of(fromActions.loadApplicationDetailsImageError({ error: err }))
          )
        )
      )
    )
  );

  loadApplicationDetailsCvPdf$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadApplicationDetailsCvPdf),
      concatLatestFrom(() => this.store.select(fromRouter.selectQueryParams)),
      switchMap(([_, params]) =>
        this.applicationService.getCvPdfById(params['bewerberId']).pipe(
          map((pdf) =>
            fromActions.loadApplicationDetailsCvPdfSuccess({ base64: pdf })
          ),
          catchError((err) =>
            of(fromActions.loadApplicationDetailsCvPdfError({ error: err }))
          )
        )
      )
    )
  );

  loadApplicationDetailsLetterPdf$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadApplicationDetailsLetterPdf),
      concatLatestFrom(() => this.store.select(fromRouter.selectQueryParams)),
      switchMap(([_, params]) =>
        this.applicationService.getLetterPdfById(params['bewerbungId']).pipe(
          map((pdf) =>
            fromActions.loadApplicationDetailsLetterPdfSuccess({ base64: pdf })
          ),
          catchError((err) =>
            of(fromActions.loadApplicationDetailsLetterPdfError({ error: err }))
          )
        )
      )
    )
  );

  loadApplicationDetailsApplicant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadApplicationDetailsApplicant),
      concatLatestFrom(() => this.store.select(fromRouter.selectQueryParams)),
      switchMap(([_, params]) =>
        this.applicationService.getApplicant(params['bewerberId']).pipe(
          map((applicant) =>
            fromActions.loadApplicationDetailsApplicantSuccess({
              applicant: applicant,
            })
          ),
          catchError((err) =>
            of(fromActions.loadApplicationDetailsApplicantError({ error: err }))
          )
        )
      )
    )
  );

  loadApplicationDetailsInterests$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadApplicationDetailsInterests),
      concatLatestFrom(() => this.store.select(fromRouter.selectQueryParams)),
      switchMap(([_, params]) =>
        this.accountService.getInterestsById(params['bewerberId']).pipe(
          map((interests) =>
            fromActions.loadApplicationDetailsInterestsSuccess({
              interests: interests,
            })
          ),
          catchError((err) =>
            of(fromActions.loadApplicationDetailsInterestsError({ error: err }))
          )
        )
      )
    )
  );

  loadApplicationDetailsStations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadApplicationDetailsStations),
      concatLatestFrom(() => this.store.select(fromRouter.selectQueryParams)),
      switchMap(([_, params]) =>
        this.accountService.getStationsById(params['bewerberId']).pipe(
          map((stations) =>
            fromActions.loadApplicationDetailsStationsSuccess({
              stations: stations,
            })
          ),
          catchError((err) =>
            of(fromActions.loadApplicationDetailsStationsError({ error: err }))
          )
        )
      )
    )
  );

  loadApplicationDetailsMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadApplicationDetailsMessages),
      concatLatestFrom(() => this.store.select(fromRouter.selectQueryParams)),
      switchMap(([_, params]) =>
        this.applicationService.getMessages(params['bewerbungId']).pipe(
          map((messages) =>
            fromActions.loadApplicationDetailsMessagesSuccess({
              messages: messages,
            })
          ),
          catchError((err) =>
            of(fromActions.loadApplicationDetailsMessagesError({ error: err }))
          )
        )
      )
    )
  );
}
