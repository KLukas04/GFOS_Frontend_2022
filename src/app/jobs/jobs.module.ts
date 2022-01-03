import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { SearchComponent } from './components/search/search.component';
import { TuiGroupModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import {
  TuiAvatarModule,
  TuiDataListWrapperModule,
  TuiSelectModule,
} from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [JobsComponent, SearchComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    TuiGroupModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiDataListWrapperModule,
    ReactiveFormsModule,
    TuiAvatarModule,
  ],
})
export class JobsModule {}
