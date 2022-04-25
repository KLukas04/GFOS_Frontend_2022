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
  TuiBadgeModule,
  TuiCarouselModule,
  TuiDataListWrapperModule,
  TuiInputFileModule,
  TuiInputModule,
  TuiIslandModule,
  TuiMarkerIconModule,
  TuiPaginationModule,
  TuiSelectModule,
  TuiTagModule,
  TuiTextAreaModule,
  TuiToggleModule,
} from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HowItWorksComponent } from './components/main/how-it-works/how-it-works.component';
import { TrendsComponent } from './components/main/trends/trends.component';
import { TrendJobCardComponent } from './components/main/trend-job-card/trend-job-card.component';
import { CategoriesComponent } from './components/main/categories/categories.component';
import { CategoryCardComponent } from './components/main/category-card/category-card.component';
import { OverviewComponent } from './components/details/overview/overview.component';
import { HeaderComponent } from './components/details/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverviewSectionComponent } from './components/details/overview-section/overview-section.component';
import { InformationItemComponent } from './components/details/information-item/information-item.component';
import { RemoteDataModule } from 'ngx-remotedata';
import { StoreModule } from '@ngrx/store';

import * as fromReducer from './store/jobs.reducer';
import { EffectsModule } from '@ngrx/effects';
import { JobsEffects } from './store/jobs.effects';
import { ResultsComponent } from './components/results/results/results.component';
import { SidebarComponent } from './components/results/sidebar/sidebar.component';
import { JobPreviewComponent } from './components/results/job-preview/job-preview.component';
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
    ResultsComponent,
    SidebarComponent,
    JobPreviewComponent,
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
    TuiInputModule,
    TuiTextAreaModule,
    FontAwesomeModule,
    TuiInputFileModule,
    RemoteDataModule,
    FormsModule,
    ReactiveFormsModule,
    TuiToggleModule,
    TuiBadgeModule,
    StoreModule.forFeature(fromReducer.jobsFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([JobsEffects]),
  ],
})
export class JobsModule { }
