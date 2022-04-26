import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPwPageComponent } from './authorization/components/forgot-pw-page/forgot-pw-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authorization/authorization.module').then(
        (m) => m.AuthorizationModule
      ),
  },
  { path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule) },
  { path: 'employer', loadChildren: () => import('./employer/employer.module').then(m => m.EmployerModule) },
  { path: 'applicant', loadChildren: () => import('./applicant/applicant.module').then(m => m.ApplicantModule) },
  { path: 'auth/forgotPw', component: ForgotPwPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
