import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import { EmployerRoutingModule } from './employer-routing.module';
import { EmployerComponent } from './employer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TuiButtonModule, TuiDataListModule, TuiDialogModule, TuiHostedDropdownModule, TuiLinkModule, TuiNotificationModule, TuiPrimitiveTextfieldModule, TuiRootModule, TuiScrollbarModule, TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiAxesModule, TuiLineChartModule } from '@taiga-ui/addon-charts';
import { TuiAvatarModule, TuiBadgedContentModule, TuiBadgeModule, TuiCheckboxBlockModule, TuiCheckboxModule, TuiDataListWrapperModule, TuiInputModule, TuiIslandModule, TuiMarkerIconModule, TuiMultiSelectModule, TuiPdfViewerModule, TuiProgressModule, TuiSelectModule, TuiTextAreaModule, TuiToggleModule } from '@taiga-ui/kit';
import { CreateJobComponent } from './components/createJob/create-job/create-job.component';
import { HeaderComponent } from './components/createJob/header/header.component';
import { ContentComponent } from './components/createJob/content/content.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApplicantRoutingModule } from '../applicant/applicant-routing.module';
import { MyJobsComponent } from './components/myjobs/my-jobs/my-jobs.component';
import { JobOfferComponent } from './components/myjobs/job-offer/job-offer.component';
import { ApplicationsForJobComponent } from './components/myjobs/applications-for-job/applications-for-job.component';
import { TUI_SANITIZER } from '@taiga-ui/cdk';
import { ApplicantDetailViewComponent } from './components/myjobs/applicant-detail-view/applicant-detail-view.component';
import { OpenApplicationsComponent } from './components/open-applications/open-applications.component';
import { MyApplicationsComponent } from './components/my-applications/my-applications/my-applications.component';
import { CreateEmployeeComponent } from './components/administration/create-employee/create-employee.component';
import { CreateDepartmentComponent } from './components/administration/create-department/create-department.component';
import { SendOnDialogComponent } from './components/send-on-dialog/send-on-dialog.component';
import { DelegateDialogComponent } from './components/delegate-dialog/delegate-dialog.component';

@NgModule({
  declarations: [EmployerComponent, SidebarComponent, CreateJobComponent, HeaderComponent, ContentComponent, MyJobsComponent, JobOfferComponent, ApplicationsForJobComponent, ApplicantDetailViewComponent, OpenApplicationsComponent, MyApplicationsComponent, CreateEmployeeComponent, CreateDepartmentComponent, SendOnDialogComponent, DelegateDialogComponent],
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
    TuiMarkerIconModule,
    TuiHostedDropdownModule,
    TuiSvgModule,
    
  ],
  providers:[
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
  ]
})
export class EmployerModule {}
