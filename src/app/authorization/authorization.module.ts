import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  TuiButtonModule,
  TuiDialogModule,
  TuiRootModule,
} from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromReducer from './store/authorization.reducer';
import { AuthorizationEffects } from './store/authorization.effects';
@NgModule({
  declarations: [AuthorizationComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    FontAwesomeModule,
    TuiDialogModule,
    TuiInputModule,
    TuiButtonModule,
    TuiRootModule,
    FormsModule,
    StoreModule.forFeature(
      fromReducer.authorizationFeatureKey,
      fromReducer.reducer
    ),
    EffectsModule.forFeature([AuthorizationEffects]),
    ReactiveFormsModule,
  ],
})
export class AuthorizationModule {}
