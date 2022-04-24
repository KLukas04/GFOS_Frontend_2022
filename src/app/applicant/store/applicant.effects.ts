import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { LebenslaufService } from '../service/lebenslauf.service';

import * as fromActions from './applicant.actions';

@Injectable()
export class ApplicantEffects {
  constructor(
    private actions$: Actions,
    private lebenslaufService: LebenslaufService
  ) {}

  loadLebenslaufStationen$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadLebenslaufStationen),
      mergeMap(() =>
        this.lebenslaufService.getLebenslaufStationen().pipe(
          map((stationen) =>
            fromActions.loadLebenslaufStationenSuccess({ stationen: stationen })
          ),
          catchError((err) =>
            of(fromActions.loadLebenslaufStationenError({ error: err }))
          )
        )
      )
    )
  );
}
