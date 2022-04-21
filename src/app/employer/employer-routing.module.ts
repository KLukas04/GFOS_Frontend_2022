import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJobComponent } from './components/createJob/create-job/create-job.component';
import { ApplicationsForJobComponent } from './components/myjobs/applications-for-job/applications-for-job.component';
import { MyJobsComponent } from './components/myjobs/my-jobs/my-jobs.component';
import { EmployerComponent } from './employer.component';

const routes: Routes = [
  { path: '', component: EmployerComponent },
  { path: 'createJob', component: CreateJobComponent},
  { path: 'myjobs', component: MyJobsComponent},
  { path: 'myjobs/openApplications', component: ApplicationsForJobComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
