import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromActions from './jobs.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { JobService } from '../service/job.service';

@Injectable()
export class JobsEffects {
  constructor(private actions$: Actions, private jobService: JobService) {}

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
}
