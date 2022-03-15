import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerRoutingModule } from './employer-routing.module';
import { EmployerComponent } from './employer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { TuiAxesModule, TuiLineChartModule } from '@taiga-ui/addon-charts';
import { TuiAvatarModule, TuiCheckboxBlockModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [EmployerComponent, SidebarComponent],
  imports: [
    CommonModule,
    EmployerRoutingModule,
    TuiLinkModule,
    TuiAxesModule,
    TuiLineChartModule,
    TuiButtonModule
  ],
})
export class EmployerModule {}
