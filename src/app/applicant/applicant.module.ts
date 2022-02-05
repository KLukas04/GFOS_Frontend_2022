import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { ApplicantComponent } from './applicant.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';


@NgModule({
  declarations: [
    ApplicantComponent,
    CategoryCardComponent
  ],
  imports: [
    CommonModule,
    ApplicantRoutingModule
  ]
})
export class ApplicantModule { }
