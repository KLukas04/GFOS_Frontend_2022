import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { LoginService } from '../service/login.service';
import { TokenStorageService } from '../service/token-storage.service';

import * as fromActions from './authorization.actions';
import * as fromReducer from './authorization.reducer';
import * as fromSelectors from './authorization.selectors';

@Injectable()
export class AuthorizationEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromReducer.AuthorizationState>,
    private loginService: LoginService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  tryToLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.tryLogin),
      concatLatestFrom(() => this.store.select(fromSelectors.selectLoginCreds)),
      switchMap(([_, creds]) =>
        this.loginService.tryToLogin(creds.email, creds.password).pipe(
          tap((res) => this.tokenStorage.saveToken(res.token)),
          tap((res) =>
            res.ispersonaler
              ? localStorage.setItem('defaultRoute', 'exployer')
              : localStorage.setItem('defaultRoute', 'applicant')
          ),
          tap(() => this.router.navigateByUrl('jobs')),
          map((res) => fromActions.tryLoginSuccess({ token: res.token })),
          catchError((err) => of(fromActions.tryLoginError({ error: err })))
        )
      )
    )
  );

  tryReagistration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.tryRegistration),
      concatLatestFrom(() =>
        this.store.select(fromSelectors.selectRegistrationData)
      ),
      switchMap(([_, data]) =>
        this.loginService.tryRegistration(data).pipe(
          map(() => fromActions.tryRegistrationSuccess()),
          catchError((err) =>
            of(fromActions.tryRegistrationError({ error: err }))
          )
        )
      )
    )
  );

  verifyRegistration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.tryVerificationPin),
      concatLatestFrom(() =>
        this.store.select(fromSelectors.selectVerificationPin)
      ),
      switchMap(([_, pin]) =>
        this.loginService.tryVerificationPin(pin).pipe(
          tap((res) => this.tokenStorage.saveToken(res)),
          map((res) => fromActions.tryVerificationPinSuccess({ token: res })),
          catchError((err) =>
            of(fromActions.tryVerificationPinError({ error: err }))
          )
        )
      )
    )
  );
}
