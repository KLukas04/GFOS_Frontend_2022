import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { LebenslaufService } from '../service/lebenslauf.service';

import * as fromActions from './applicant.actions';
import * as fromReducer from './applicant.reducer';
import * as fromSelectors from './applicant.selectors';

@Injectable()
export class ApplicantEffects {
  constructor(
    private actions$: Actions,
    private lebenslaufService: LebenslaufService,
    private store: Store<fromReducer.ApplicantState>
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

  addNewLebenslaufStation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.newLebenslaufStationAdd),
      concatLatestFrom(() =>
        this.store.select(fromSelectors.selectNewStationData)
      ),
      switchMap(([_, data]) =>
        this.lebenslaufService
          .addLebenslaufStation(data.start!, data.end!, data.info!)
          .pipe(map(() => fromActions.loadLebenslaufStationen()))
      )
    )
  );

  loadInteressenfelder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadInteressenfelder),
      mergeMap(() =>
        this.lebenslaufService.getInteressenfelder().pipe(
          map((felder) =>
            fromActions.loadInteressenfelderSuccess({ felder: felder })
          ),
          catchError((err) =>
            of(fromActions.loadInteressenfelderError({ error: err }))
          )
        )
      )
    )
  );

  addNewInteressenfeld$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.newInteresseAdd),
      concatLatestFrom(() =>
        this.store.select(fromSelectors.selectNewInteresseData)
      ),
      switchMap(([_, data]) =>
        this.lebenslaufService
          .addInteressenfeld(data!)
          .pipe(map(() => fromActions.loadInteressenfelder()))
      )
    )
  );
}
