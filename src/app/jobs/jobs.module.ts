import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { SearchComponent } from './components/main/search/search.component';
import {
  TuiButtonModule,
  TuiGroupModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiAvatarModule,
  TuiCarouselModule,
  TuiDataListWrapperModule,
  TuiIslandModule,
  TuiPaginationModule,
  TuiSelectModule,
} from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { HowItWorksComponent } from './components/main/how-it-works/how-it-works.component';
import { TrendsComponent } from './components/main/trends/trends.component';
import { TrendJobCardComponent } from './components/main/trend-job-card/trend-job-card.component';
import { CategoriesComponent } from './components/main/categories/categories.component';
import { CategoryCardComponent } from './components/main/category-card/category-card.component';
import { OverviewComponent } from './components/details/overview/overview.component';
import { HeaderComponent } from './components/details/header/header.component';

@NgModule({
  declarations: [
    JobsComponent,
    SearchComponent,
    HowItWorksComponent,
    TrendsComponent,
    TrendJobCardComponent,
    CategoriesComponent,
    CategoryCardComponent,
    OverviewComponent,
    HeaderComponent,
  ],
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
    TuiCarouselModule,
    TuiIslandModule,
    TuiPaginationModule,
  ],
})
export class JobsModule {}
