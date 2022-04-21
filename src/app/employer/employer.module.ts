import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import { EmployerRoutingModule } from './employer-routing.module';
import { EmployerComponent } from './employer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TuiButtonModule, TuiDialogModule, TuiLinkModule, TuiNotificationModule, TuiPrimitiveTextfieldModule, TuiRootModule, TuiScrollbarModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiAxesModule, TuiLineChartModule } from '@taiga-ui/addon-charts';
import { TuiAvatarModule, TuiBadgeModule, TuiCheckboxBlockModule, TuiInputModule, TuiIslandModule, TuiPdfViewerModule, TuiProgressModule, TuiTextAreaModule, TuiToggleModule } from '@taiga-ui/kit';
import { CreateJobComponent } from './components/createJob/create-job/create-job.component';
import { HeaderComponent } from './components/createJob/header/header.component';
import { ContentComponent } from './components/createJob/content/content.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApplicantRoutingModule } from '../applicant/applicant-routing.module';
import { MyJobsComponent } from './components/myjobs/my-jobs/my-jobs.component';
import { JobOfferComponent } from './components/myjobs/job-offer/job-offer.component';
import { ApplicationsForJobComponent } from './components/myjobs/applications-for-job/applications-for-job.component';
import { ApplicationCardComponent } from './components/myjobs/application-card/application-card.component';
import { TUI_SANITIZER } from '@taiga-ui/cdk';

@NgModule({
  declarations: [EmployerComponent, SidebarComponent, CreateJobComponent, HeaderComponent, ContentComponent, MyJobsComponent, JobOfferComponent, ApplicationsForJobComponent, ApplicationCardComponent],
  imports: [
    CommonModule,
    EmployerRoutingModule,
    TuiLinkModule,
    TuiAxesModule,
    TuiLineChartModule,
    TuiButtonModule,
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
    TuiToggleModule,
    TuiScrollbarModule,
    TuiTextAreaModule,
    TuiTextfieldControllerModule,
    TuiPdfViewerModule,
    PolymorpheusModule
  ],
  providers:[
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
  ]
})
export class EmployerModule {}
