import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AuthorizationComponent],
  imports: [CommonModule, AuthorizationRoutingModule, FontAwesomeModule],
})
export class AuthorizationModule {}
