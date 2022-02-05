import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerRoutingModule } from './employer-routing.module';
import { EmployerComponent } from './employer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TuiLinkModule } from '@taiga-ui/core';

@NgModule({
  declarations: [EmployerComponent, SidebarComponent],
  imports: [CommonModule, EmployerRoutingModule, TuiLinkModule],
})
export class EmployerModule {}
