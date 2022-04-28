import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { BewerbungService } from '../service/bewerbung.service';
import { LebenslaufService } from '../service/lebenslauf.service';

import * as fromActions from './applicant.actions';
import * as fromReducer from './applicant.reducer';
import * as fromSelectors from './applicant.selectors';

@Injectable()
export class ApplicantEffects {
  constructor(
    private actions$: Actions,
    private lebenslaufService: LebenslaufService,
    private bewerbungService: BewerbungService,
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

  loadOwnAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadOwnAccount),
      mergeMap(() =>
        this.lebenslaufService.getOwnAccount().pipe(
          map((acc) => fromActions.loadOwnAccountSuccess({ account: acc })),
          catchError((err) =>
            of(fromActions.loadOwnAccountError({ error: err }))
          )
        )
      )
    )
  );

  updateOwnAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.newKontaktUpdate),
      concatLatestFrom(() =>
        this.store.select(fromSelectors.selectChangeAccountData)
      ),
      switchMap(([_, data]) =>
        this.lebenslaufService
          .updateAccount(data.firstName, data.lastName, data.email, data.phone)
          .pipe(map(() => fromActions.loadOwnAccount()))
      )
    )
  );

  loadOwnAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadOwnAdress),
      mergeMap(() =>
        this.lebenslaufService.getOwnAddress().pipe(
          map((address) =>
            fromActions.loadOwnAdressSuccess({ address: address })
          ),
          catchError((err) =>
            of(fromActions.loadOwnAdressError({ error: err }))
          )
        )
      )
    )
  );

  updateOwnAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.newAddressUpdate),
      concatLatestFrom(() =>
        this.store.select(fromSelectors.selectChangeAddressData)
      ),
      switchMap(([_, data]) =>
        this.lebenslaufService
          .updateAddress(
            data.street,
            data.number,
            data.plz,
            data.town,
            data.country
          )
          .pipe(map(() => fromActions.loadOwnAdress()))
      )
    )
  );

  loadOwnSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadOwnSettings),
      mergeMap(() =>
        this.lebenslaufService.getOwnSettings().pipe(
          map((settings) =>
            fromActions.loadOwnSettingsSuccess({ settings: settings })
          ),
          catchError((err) =>
            of(fromActions.loadOwnSettingsError({ error: err }))
          )
        )
      )
    )
  );

  updateOwnSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.newSettingsUpdate),
      concatLatestFrom(() =>
        this.store.select(fromSelectors.selectChangeSettingsData)
      ),
      switchMap(([_, data]) =>
        this.lebenslaufService
          .updateSettings(data.getMails!, data.twoFa!)
          .pipe(map(() => fromActions.loadOwnSettings()))
      )
    )
  );

  loadSentApplications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadSentApplications),
      mergeMap(() =>
        this.bewerbungService.getSentApplications().pipe(
          map((applications) =>
            fromActions.loadSentApplicationsSuccess({
              applications: applications,
            })
          ),
          catchError((err) =>
            of(fromActions.loadSentApplicationsError({ error: err }))
          )
        )
      )
    )
  );

  deleteApplication$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.deleteApplication),
      mergeMap((action) =>
        this.bewerbungService
          .deleteApplication(action.id)
          .pipe(map(() => fromActions.loadSentApplications()))
      )
    )
  );
}
