import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerRoutingModule } from './employer-routing.module';
import { EmployerComponent } from './employer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TuiButtonModule, TuiDialogModule, TuiLinkModule, TuiNotificationModule, TuiPrimitiveTextfieldModule, TuiRootModule, TuiScrollbarModule } from '@taiga-ui/core';
import { TuiAxesModule, TuiLineChartModule } from '@taiga-ui/addon-charts';
import { TuiAvatarModule, TuiBadgeModule, TuiCheckboxBlockModule, TuiInputModule, TuiIslandModule, TuiProgressModule, TuiToggleModule } from '@taiga-ui/kit';
import { CreateJobComponent } from './components/createJob/create-job/create-job.component';
import { HeaderComponent } from './components/createJob/header/header.component';
import { ContentComponent } from './components/createJob/content/content.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApplicantRoutingModule } from '../applicant/applicant-routing.module';

@NgModule({
  declarations: [EmployerComponent, SidebarComponent, CreateJobComponent, HeaderComponent, ContentComponent],
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
    TuiScrollbarModule
  ],
})
export class EmployerModule {}
