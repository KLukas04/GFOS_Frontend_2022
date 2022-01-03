import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [JobsComponent, SearchComponent],
  imports: [CommonModule, JobsRoutingModule],
})
export class JobsModule {}
