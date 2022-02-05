import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerRoutingModule } from './employer-routing.module';
import { EmployerComponent } from './employer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [EmployerComponent, SidebarComponent],
  imports: [CommonModule, EmployerRoutingModule],
})
export class EmployerModule {}
