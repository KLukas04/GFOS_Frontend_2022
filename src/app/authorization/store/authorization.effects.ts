import { HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TuiDialogService } from '@taiga-ui/core';
import { catchError, map, of, switchMap, take } from 'rxjs';
import { LoginService } from '../service/login.service';
import { TokenStorageService } from '../service/token-storage.service';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';

import * as fromActions from './authorization.actions';
import * as fromReducer from './authorization.reducer';
import * as fromSelectors from './authorization.selectors';
import { VerfiyDialogComponent } from '../components/verfiy-dialog/verfiy-dialog.component';
import { TwofaDialogComponent } from '../components/twofa-dialog/twofa-dialog.component';

@Injectable()
export class AuthorizationEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromReducer.AuthorizationState>,
    private loginService: LoginService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}

  private readonly verifyDialog = this.dialogService.open(
    new PolymorpheusComponent(VerfiyDialogComponent, this.injector),
    {
      dismissible: false,
      label: 'Verfizierung',
    }
  );

  private readonly twofaDialog = this.dialogService.open(
    new PolymorpheusComponent(TwofaDialogComponent, this.injector),
    {
      dismissible: false,
      label: '2-Faktor-Authentifizierung',
    }
  );

  tryToLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.tryLogin),
      concatLatestFrom(() => this.store.select(fromSelectors.selectLoginCreds)),
      switchMap(([_, creds]) =>
        this.loginService.tryToLogin(creds.email, creds.password).pipe(
          map((res) => {
            res.ispersonaler
              ? localStorage.setItem('defaultRoute', 'employer')
              : localStorage.setItem('defaultRoute', 'applicant');
            if (!res.twofa) {
              this.tokenStorage.saveToken(res.token);
              this.router.navigateByUrl('jobs');
              return fromActions.tryLoginSuccess({
                token: res.token,
                isPersonaler: res.ispersonaler,
              });
            }
            this.twofaDialog.subscribe();
            return fromActions.loginNeedTwoFa({
              isPersonaler: res.ispersonaler,
            });
          }),
          catchError((err: HttpErrorResponse) => {
            console.log(err);
            if(err.statusText === "Falsches Passwort"){
              this.store.dispatch(fromActions.setPwWrongError());
            }
            return of(fromActions.tryLoginError({ error: err }));
          })
        )
      )
    )
  );

  tryTwoFaPin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.tryTwoFaPin),
      concatLatestFrom(() => this.store.select(fromSelectors.selectTwoFaPin)),
      switchMap(([_, data]) =>
        this.loginService.tryTwoFaPin(data.email, data.pin).pipe(
          map((res) => {
            this.router.navigateByUrl('jobs');
            this.tokenStorage.saveToken(res);
            return fromActions.tryTwoFaSuccess({ token: res });
          }),
          catchError((err) => {
            if (err.status === 403) {
              this.twofaDialog.subscribe();
            }
            return of(fromActions.tryTwoFaError({ error: err }));
          })
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
          map((res) => {
            this.tokenStorage.saveToken(res);
            this.router.navigateByUrl('jobs');
            return fromActions.tryVerificationPinSuccess({ token: res });
          }),
          catchError((err: HttpErrorResponse) => {
            if (err.status === 401) {
              this.verifyDialog.subscribe();
            }
            return of(fromActions.tryVerificationPinError({ error: err }));
          })
        )
      )
    )
  );
}
