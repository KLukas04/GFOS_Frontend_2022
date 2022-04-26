import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  TuiButtonModule,
  TuiDialogModule,
  TuiLinkModule,
  TuiRootModule,
} from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromReducer from './store/authorization.reducer';
import { AuthorizationEffects } from './store/authorization.effects';
import { VerfiyDialogComponent } from './components/verfiy-dialog/verfiy-dialog.component';
import { ForgotPwPageComponent } from './components/forgot-pw-page/forgot-pw-page.component';
@NgModule({
  declarations: [AuthorizationComponent, VerfiyDialogComponent, ForgotPwPageComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    FontAwesomeModule,
    TuiDialogModule,
    TuiInputModule,
    TuiButtonModule,
    TuiRootModule,
    FormsModule,
    TuiLinkModule,
    StoreModule.forFeature(
      fromReducer.authorizationFeatureKey,
      fromReducer.reducer
    ),
    EffectsModule.forFeature([AuthorizationEffects]),
    ReactiveFormsModule,
  ],
})
export class AuthorizationModule {}
