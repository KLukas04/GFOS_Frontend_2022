import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantComponent } from './applicant.component';
import { CvEditorComponent } from './components/cv-editor/cv-editor.component';

const routes: Routes = [
  { path: '', component: ApplicantComponent },
  { path: 'cv', component: CvEditorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }
