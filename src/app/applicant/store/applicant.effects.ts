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
          .addLebenslaufStation(
            data.start!,
            data.end!,
            data.info!,
            data.referenz
          )
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

  loadFachgebiet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadFachgebiet),
      mergeMap(() =>
        this.lebenslaufService.getOwnFachgebiet().pipe(
          map((fachgebiet) =>
            fromActions.loadFachgebietSuccess({ fachgebiet: fachgebiet.name })
          ),
          catchError((err) =>
            of(fromActions.loadFachgebietError({ error: err }))
          )
        )
      )
    )
  );

  saveNewFachgebiet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.setFachgebiet),
      switchMap((action) =>
        this.lebenslaufService
          .setFachgebiet(action.fachgebiet)
          .pipe(map(() => fromActions.loadFachgebiet()))
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

  loadProfilePic$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadProfilePic),
      mergeMap(() =>
        this.lebenslaufService.getProfilePic().pipe(
          map((pic) => fromActions.loadProfilePicSuccess({ base64: pic })),
          catchError((err) =>
            of(fromActions.loadProfilePicError({ error: err }))
          )
        )
      )
    )
  );

  uploadProfilePic$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.uploadNewProfilePic),
      switchMap((action) =>
        this.lebenslaufService
          .uploadProfilePic(action.base64)
          .pipe(map(() => fromActions.loadProfilePic()))
      )
    )
  );

  loadCvPdf$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadCv),
      mergeMap(() =>
        this.lebenslaufService.getCvPdf().pipe(
          map((pdf) => fromActions.loadCvSuccess({ base64: pdf })),
          catchError((err) => of(fromActions.loadCvError({ error: err })))
        )
      )
    )
  );

  uploadCvPdf$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.uploadNewCvPdf),
      switchMap((action) =>
        this.lebenslaufService
          .uploadCvPdf(action.base64)
          .pipe(map(() => fromActions.loadCv()))
      )
    )
  );

  deleteCvPdf$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.deleteCvPdf),
      mergeMap(() =>
        this.lebenslaufService
          .deleteCvPdf()
          .pipe(map(() => fromActions.loadCv()))
      )
    )
  );
}
