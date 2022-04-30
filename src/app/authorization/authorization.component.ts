import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import * as fromReducer from './store/authorization.reducer';
import * as fromActions from './store/authorization.actions';
import * as fromSelectors from './store/authorization.selectors';

import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { VerfiyDialogComponent } from './components/verfiy-dialog/verfiy-dialog.component';
import { ForgotPwDialogComponent } from './components/forgot-pw-dialog/forgot-pw-dialog.component';
import { TuiValidationError } from '@taiga-ui/cdk';
import { Observable } from 'rxjs';
import { HostListener } from "@angular/core";

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

  screenHeight: number = 0;
  screenWidth: number = 0;
  showError = false;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 481) {
      console.log("false");
      this.showError = false;
    } else {
      this.showError = true;
    }
  }

  private readonly verifyDialog = this.dialogService.open(
    new PolymorpheusComponent(VerfiyDialogComponent, this.injector),
    {
      dismissible: false,
      label: 'Verfizierung',
    }
  );

  private readonly forGotPwDialog = this.dialogService.open(
    new PolymorpheusComponent(ForgotPwDialogComponent, this.injector),
    {
      dismissible: true,
      label: 'Bitte gib deine Email an',
    }
  );

  public loginEmailForm: FormControl;
  public loginPasswordForm: FormControl;

  public wrongPw = false;
  pwError = new TuiValidationError('Das Passwort ist leider falsch!');
  emailError = new TuiValidationError('Die Email ist leider nicht gültig!');
  missingInfoError = new TuiValidationError('Bitte ausfüllen!');

  public registrationFirstnameForm: FormControl;
  public registrationLastnameForm: FormControl;
  public registrationEmailForm: FormControl;
  public registrationPasswordForm: FormControl;

  constructor(
    private store: Store<fromReducer.AuthorizationState>,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {
    this.loginEmailForm = new FormControl(null, [Validators.email, Validators.required]);

    this.loginPasswordForm = new FormControl(null, Validators.required);

    this.registrationFirstnameForm = new FormControl(null);
    this.registrationLastnameForm = new FormControl(null);
    this.registrationEmailForm = new FormControl(null, [Validators.email, Validators.required]);
    this.registrationPasswordForm = new FormControl(null);

    this.store.select(fromSelectors.selectPwError).subscribe(error => {
      this.wrongPw = error;
    })

    this.getScreenSize();
  }

  ngOnInit(): void { }

  changeToSignUp(): void {
    const container: Element | null = document.querySelector('.container');
    container?.classList.add('sign-up-mode');
  }

  changeToSignIn(): void {
    const container: Element | null = document.querySelector('.container');
    container?.classList.remove('sign-up-mode');
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
    setTimeout(() => {
      this.loginPasswordForm.reset();
    }, 800);

  }

  getEmailErrorLogin(): TuiValidationError | null {
    if (this.showError) {
      if ((this.loginEmailForm.value !== "" && this.loginEmailForm.value !== null) && this.loginEmailForm.errors !== null) {
        return this.emailError;
      }
    }
    return null;
  }

  getPwError(): TuiValidationError | null {
    if (this.showError) {
      if ((this.loginPasswordForm.value !== "" && this.loginPasswordForm.value !== null) && this.wrongPw) {
        return this.pwError;
      }
    }
    return null;
  }

  getFirstNameError(): TuiValidationError | null {
    if (this.showError) {
      if (this.registrationFirstnameForm.value === "") {
        return this.missingInfoError;
      }
    }
    return null;
  }
  getLastNameError(): TuiValidationError | null {
    if (this.showError) {
      if (this.registrationLastnameForm.value === "") {
        return this.missingInfoError;
      }
    }
    return null;
  }

  getEmailErrorRegister(): TuiValidationError | null {
    if (this.showError) {
      if (this.registrationEmailForm.errors !== null && this.registrationEmailForm.value !== null) {
        return this.emailError;
      }
    }
    return null;
  }

  getPwErrorRegister(): TuiValidationError | null {
    if (this.showError) {
      if (this.registrationPasswordForm.value === "") {
        return this.missingInfoError;
      }
    }
    return null;
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
    if (this.registrationFirstnameForm.value === "" || this.registrationFirstnameForm.value === null) {
      this.registrationFirstnameForm.setValue("");
    } else if (this.registrationLastnameForm.value === "" || this.registrationLastnameForm.value === null) {
      this.registrationLastnameForm.setValue("");
    } else if (this.registrationPasswordForm.value === "" || this.registrationPasswordForm.value === null) {
      this.registrationPasswordForm.setValue("");
    } else if (this.registrationEmailForm.invalid) {

    } else {
      this.store.dispatch(fromActions.tryRegistration());
      this.verifyDialog.subscribe();
    }
  }

  showForgotPwDialog() {
    this.forGotPwDialog.subscribe();
  }
}
