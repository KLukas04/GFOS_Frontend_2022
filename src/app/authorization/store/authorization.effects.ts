import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { LoginService } from '../service/login.service';

import * as fromActions from './authorization.actions';
import * as fromReducer from './authorization.reducer';
import * as fromSelectors from './authorization.selectors';

@Injectable()
export class AuthorizationEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromReducer.AuthorizationState>,
    private loginService: LoginService
  ) {}

  tryToLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.tryLogin),
      concatLatestFrom(() => this.store.select(fromSelectors.selectLoginCreds)),
      switchMap(([_, creds]) =>
        this.loginService.tryToLogin(creds.email, creds.password).pipe(
          map((res) => fromActions.tryLoginSuccess({ token: res.token })),
          catchError((err) => of(fromActions.tryLoginError({ error: err })))
        )
      )
    )
  );
}