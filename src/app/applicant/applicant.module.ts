import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiNotificationModule,
  TuiButtonModule,
  TuiPrimitiveTextfieldModule,
  TuiDialogModule, 
  TuiRootModule,
  TuiScrollbarModule,
} from '@taiga-ui/core';

import {
  TuiBadgeModule,
  TuiIslandModule,
  TuiAvatarModule,
  TuiProgressModule,
  TuiInputModule,
  TuiToggleModule
} from '@taiga-ui/kit';

import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { ApplicantComponent } from './applicant.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { InformationCardComponent } from './components/information-card/information-card.component';
import { CvEditorComponent } from './components/cv-editor/cv-editor.component';
import { TimelineViewComponent } from './components/timeline-view/timeline-view.component';
import { StartedApplicationsComponent } from './components/started-applications/started-applications.component';
import { ApplicationListItemComponent } from './components/application-list-item/application-list-item.component';
import { GreetingsHeaderComponent } from './components/greetings-header/greetings-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsCardComponent } from './components/settings-card/settings-card.component';

@NgModule({
  declarations: [
    ApplicantComponent,
    CategoryCardComponent,
    InformationCardComponent,
    CvEditorComponent,
    TimelineViewComponent,
    StartedApplicationsComponent,
    ApplicationListItemComponent,
    GreetingsHeaderComponent,
    SettingsCardComponent,
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
    TuiProgressModule,
    TuiRootModule,
    TuiDialogModule,
    ReactiveFormsModule,
    TuiInputModule,
    FormsModule,
    PolymorpheusModule,
    TuiToggleModule,
    TuiScrollbarModule
  ]
})
export class ApplicantModule { }
