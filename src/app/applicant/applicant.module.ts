import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiNotificationModule,
  TuiButtonModule,
  TuiPrimitiveTextfieldModule
} from '@taiga-ui/core';

import {
  TuiBadgeModule,
  TuiIslandModule,
  TuiAvatarModule
} from '@taiga-ui/kit';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { ApplicantComponent } from './applicant.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ApplicationCardComponent } from './components/application-card/application-card.component';
import { InformationCardComponent } from './components/information-card/information-card.component';
import { CvEditorComponent } from './components/cv-editor/cv-editor.component';

@NgModule({
  declarations: [
    ApplicantComponent,
    CategoryCardComponent,
    ApplicationCardComponent,
    InformationCardComponent,
    CvEditorComponent,
  ],
  imports: [
    CommonModule,
    ApplicantRoutingModule,
    TuiBadgeModule,
    TuiNotificationModule,
    TuiAvatarModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiPrimitiveTextfieldModule
  ]
})
export class ApplicantModule { }
