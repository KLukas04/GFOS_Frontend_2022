import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJobComponent } from './components/createJob/create-job/create-job.component';
import { EmployerComponent } from './employer.component';

const routes: Routes = [
  { path: '', component: EmployerComponent },
  { path: 'createJob', component: CreateJobComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
