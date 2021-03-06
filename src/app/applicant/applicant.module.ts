import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiNotificationModule,
  TuiButtonModule,
  TuiDialogModule,
  TuiRootModule,
  TuiScrollbarModule,
  TuiLinkModule,
} from '@taiga-ui/core';

import {
  TuiBadgeModule,
  TuiIslandModule,
  TuiAvatarModule,
  TuiProgressModule,
  TuiInputModule,
  TuiToggleModule,
  TuiInputFileModule,
  TuiMarkerIconModule,
  TuiInputDateRangeModule,
  TuiPdfViewerModule,
  TuiSelectModule,
  TuiDataListWrapperModule,
} from '@taiga-ui/kit';

import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { ApplicantComponent } from './applicant.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CvEditorComponent } from './components/cv-editor/cv-editor.component';
import { TimelineViewComponent } from './components/timeline-view/timeline-view.component';
import { StartedApplicationsComponent } from './components/started-applications/started-applications.component';
import { ApplicationListItemComponent } from './components/application-list-item/application-list-item.component';
import { GreetingsHeaderComponent } from './components/greetings-header/greetings-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsCardComponent } from './components/settings-card/settings-card.component';
import { StoreModule } from '@ngrx/store';

import * as fromReducer from './store/applicant.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ApplicantEffects } from './store/applicant.effects';
import { RemoteDataModule } from 'ngx-remotedata';
import { InterestDialogComponent } from './components/interest-dialog/interest-dialog.component';
import { CvDialogComponent } from './components/cv-dialog/cv-dialog.component';
import { UpdateProfilpicDialogComponent } from './components/update-profilpic-dialog/update-profilpic-dialog.component';

@NgModule({
  declarations: [
    ApplicantComponent,
    CategoryCardComponent,
    CvEditorComponent,
    TimelineViewComponent,
    StartedApplicationsComponent,
    ApplicationListItemComponent,
    GreetingsHeaderComponent,
    SettingsCardComponent,
    InterestDialogComponent,
    CvDialogComponent,
    UpdateProfilpicDialogComponent,
  ],
  imports: [
    CommonModule,
    ApplicantRoutingModule,
    TuiBadgeModule,
    TuiNotificationModule,
    TuiAvatarModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiInputModule,
    TuiProgressModule,
    TuiRootModule,
    TuiDialogModule,
    ReactiveFormsModule,
    TuiInputModule,
    FormsModule,
    PolymorpheusModule,
    TuiToggleModule,
    TuiScrollbarModule,
    TuiInputFileModule,
    TuiMarkerIconModule,
    TuiLinkModule,
    TuiPdfViewerModule,
    StoreModule.forFeature(
      fromReducer.applicantFeatureKey,
      fromReducer.reducer
    ),
    EffectsModule.forFeature([ApplicantEffects]),
    RemoteDataModule,
    TuiInputDateRangeModule,

    TuiSelectModule,
    TuiDataListWrapperModule,
  ],
  entryComponents: [InterestDialogComponent],
})
export class ApplicantModule {}
