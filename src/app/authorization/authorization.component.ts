import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import * as fromReducer from './store/authorization.reducer';
import * as fromActions from './store/authorization.actions';
@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit {
  public faUser = faUser;
  public faLock = faLock;
  public faEnvelope = faEnvelope;

  public pinValue: string = '';
  public open2FA: boolean = false;

  public loginEmailForm: FormControl;
  public loginPasswordForm: FormControl;

  public registrationFirstnameForm: FormControl;
  public registrationLastnameForm: FormControl;
  public registrationEmailForm: FormControl;
  public registrationPasswordForm: FormControl;

  constructor(private store: Store<fromReducer.AuthorizationState>) {
    this.loginEmailForm = new FormControl(null);
    this.loginPasswordForm = new FormControl(null);

    this.registrationFirstnameForm = new FormControl(null);
    this.registrationLastnameForm = new FormControl(null);
    this.registrationEmailForm = new FormControl(null);
    this.registrationPasswordForm = new FormControl(null);
  }

  ngOnInit(): void {}

  changeToSignUp(): void {
    const container: Element | null = document.querySelector('.container');
    container?.classList.add('sign-up-mode');
  }

  changeToSignIn(): void {
    const container: Element | null = document.querySelector('.container');
    container?.classList.remove('sign-up-mode');
  }

  show2FADialog(): void {
    this.open2FA = true;
  }

  saveLoginEmail(): void {
    this.store.dispatch(
      fromActions.newLoginEmail({ email: this.loginEmailForm.value })
    );
  }

  saveLoginPassword(): void {
    this.store.dispatch(
      fromActions.newLoginPassword({ password: this.loginPasswordForm.value })
    );
  }

  login(): void {
    this.store.dispatch(fromActions.tryLogin());
  }

  saveRegistrationFirstname(): void {
    this.store.dispatch(
      fromActions.newRegistrationFirstname({
        firstname: this.registrationFirstnameForm.value,
      })
    );
  }

  saveRegistrationLastname(): void {
    this.store.dispatch(
      fromActions.newRegistrationLastname({
        lastname: this.registrationLastnameForm.value,
      })
    );
  }

  saveRegistrationEmail(): void {
    this.store.dispatch(
      fromActions.newRegistrationEmail({
        email: this.registrationEmailForm.value,
      })
    );
  }

  saveRegistrationPassword(): void {
    this.store.dispatch(
      fromActions.newRegistrationPassword({
        password: this.registrationPasswordForm.value,
      })
    );
  }

  register(): void {
    this.store.dispatch(fromActions.tryRegistration());
  }
}
