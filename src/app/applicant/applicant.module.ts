import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiBadgeModule} from '@taiga-ui/kit';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { ApplicantComponent } from './applicant.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ApplicationCardComponent } from './components/application-card/application-card.component';
import { InformationCardComponent } from './components/information-card/information-card.component';


@NgModule({
  declarations: [
    ApplicantComponent,
    CategoryCardComponent,
    ApplicationCardComponent,
    InformationCardComponent
  ],
  imports: [
    CommonModule,
    ApplicantRoutingModule,
    TuiBadgeModule,
    TuiNotificationModule
  ]
})
export class ApplicantModule { }
