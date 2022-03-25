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
  TuiAvatarModule,
  TuiProgressModule
} from '@taiga-ui/kit';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { ApplicantComponent } from './applicant.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ApplicationCardComponent } from './components/application-card/application-card.component';
import { InformationCardComponent } from './components/information-card/information-card.component';
import { CvEditorComponent } from './components/cv-editor/cv-editor.component';
import { TimelineViewComponent } from './components/timeline-view/timeline-view.component';
import { InterestsViewComponent } from './components/interests-view/interests-view.component';
import { StartedApplicationsComponent } from './components/started-applications/started-applications.component';
import { ApplicationListItemComponent } from './components/application-list-item/application-list-item.component';
import { GreetingsHeaderComponent } from './components/greetings-header/greetings-header.component';

@NgModule({
  declarations: [
    ApplicantComponent,
    CategoryCardComponent,
    ApplicationCardComponent,
    InformationCardComponent,
    CvEditorComponent,
    TimelineViewComponent,
    InterestsViewComponent,
    StartedApplicationsComponent,
    ApplicationListItemComponent,
    GreetingsHeaderComponent,
  ],
  imports: [
    CommonModule,
    ApplicantRoutingModule,
    TuiBadgeModule,
    TuiNotificationModule,
    TuiAvatarModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiPrimitiveTextfieldModule,
    TuiProgressModule
  ]
})
export class ApplicantModule { }
