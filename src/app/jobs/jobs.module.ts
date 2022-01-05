import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { SearchComponent } from './components/search/search.component';
import {
  TuiButtonModule,
  TuiGroupModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiAvatarModule,
  TuiDataListWrapperModule,
  TuiSelectModule,
} from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { TrendsComponent } from './components/trends/trends.component';

@NgModule({
  declarations: [JobsComponent, SearchComponent, HowItWorksComponent, TrendsComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    TuiGroupModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiDataListWrapperModule,
    ReactiveFormsModule,
    TuiAvatarModule,
    TuiButtonModule,
  ],
})
export class JobsModule {}
