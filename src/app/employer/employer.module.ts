import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import { EmployerRoutingModule } from './employer-routing.module';
import { EmployerComponent } from './employer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TuiButtonModule, TuiDataListModule, TuiDialogModule, TuiLinkModule, TuiNotificationModule, TuiPrimitiveTextfieldModule, TuiRootModule, TuiScrollbarModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiAxesModule, TuiLineChartModule } from '@taiga-ui/addon-charts';
import { TuiAvatarModule, TuiBadgedContentModule, TuiBadgeModule, TuiCheckboxBlockModule, TuiCheckboxModule, TuiDataListWrapperModule, TuiInputModule, TuiIslandModule, TuiMultiSelectModule, TuiPdfViewerModule, TuiProgressModule, TuiSelectModule, TuiTextAreaModule, TuiToggleModule } from '@taiga-ui/kit';
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
import { ApplicantDetailViewComponent } from './components/myjobs/applicant-detail-view/applicant-detail-view.component';
import { OpenApplicationsComponent } from './components/open-applications/open-applications.component';
import { MyApplicationsComponent } from './components/my-applications/my-applications/my-applications.component';
import { CreateEmployeeComponent } from './components/administration/create-employee/create-employee.component';
import { CreateDepartmentComponent } from './components/administration/create-department/create-department.component';

@NgModule({
  declarations: [EmployerComponent, SidebarComponent, CreateJobComponent, HeaderComponent, ContentComponent, MyJobsComponent, JobOfferComponent, ApplicationsForJobComponent, ApplicationCardComponent, ApplicantDetailViewComponent, OpenApplicationsComponent, MyApplicationsComponent, CreateEmployeeComponent, CreateDepartmentComponent],
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
    PolymorpheusModule,
    TuiCheckboxModule,
    TuiBadgedContentModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiMultiSelectModule,
  ],
  providers:[
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
  ]
})
export class EmployerModule {}
