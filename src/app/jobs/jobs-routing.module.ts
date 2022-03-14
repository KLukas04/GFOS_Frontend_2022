import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/details/overview/overview.component';
import { JobsComponent } from './jobs.component';

const routes: Routes = [
  { 
    path: '', 
    component: JobsComponent 
  }, 
  {
    path: 'details',
    component: OverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
