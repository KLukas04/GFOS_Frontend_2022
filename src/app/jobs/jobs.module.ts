import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { SearchComponent } from './components/main/search/search.component';
import {
  TuiButtonModule,
  TuiGroupModule,
  TuiLabelModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiAvatarModule,
  TuiCarouselModule,
  TuiDataListWrapperModule,
  TuiIslandModule,
  TuiMarkerIconModule,
  TuiPaginationModule,
  TuiSelectModule,
  TuiTagModule,
} from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { HowItWorksComponent } from './components/main/how-it-works/how-it-works.component';
import { TrendsComponent } from './components/main/trends/trends.component';
import { TrendJobCardComponent } from './components/main/trend-job-card/trend-job-card.component';
import { CategoriesComponent } from './components/main/categories/categories.component';
import { CategoryCardComponent } from './components/main/category-card/category-card.component';
import { OverviewComponent } from './components/details/overview/overview.component';
import { HeaderComponent } from './components/details/header/header.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverviewSectionComponent } from './components/details/overview-section/overview-section.component';
import { InformationItemComponent } from './components/details/information-item/information-item.component';

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
    OverviewSectionComponent,
    InformationItemComponent,
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
    TuiTagModule,
    TuiMarkerIconModule,
    TuiLabelModule,
    FontAwesomeModule
  ],
})
export class JobsModule {}
