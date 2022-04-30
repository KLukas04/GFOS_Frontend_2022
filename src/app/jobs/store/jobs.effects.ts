import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';

import * as fromActions from './jobs.actions';
import * as fromReducer from './jobs.reducer';
import * as fromRouter from '../../store/router.selectors';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { JobService } from '../service/job.service';
import { Store } from '@ngrx/store';

@Injectable()
export class JobsEffects {
  constructor(
    private actions$: Actions,
    private jobService: JobService,
    private store: Store<fromReducer.JobsState>
  ) {}

  loadTrendJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadTrendJobs),
      mergeMap(() =>
        this.jobService.getTrendJobs().pipe(
          map((jobs) => fromActions.loadTrendJobsSuccess({ jobs: jobs })),
          catchError((err) =>
            of(fromActions.loadTrendJobsError({ error: err }))
          )
        )
      )
    )
  );

  loadAllFachgebiete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadFachgebiete),
      mergeMap(() =>
        this.jobService.getAllFachgebiete().pipe(
          map((fachgebiete) =>
            fromActions.loadFachgebieteSuccess({ fachgebiete: fachgebiete })
          ),
          catchError((err) =>
            of(fromActions.loadFachgebieteError({ error: err }))
          )
        )
      )
    )
  );

  loadSingleJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadSingleJob),
      concatLatestFrom(() => this.store.select(fromRouter.selectQueryParams)),
      switchMap(([_, params]) =>
        this.jobService.getJobById(params['jobId']).pipe(
          map((job) => fromActions.loadSingleJobSuccess({ job: job })),
          catchError((err) =>
            of(fromActions.loadSingleJobError({ error: err }))
          )
        )
      )
    )
  );
}
