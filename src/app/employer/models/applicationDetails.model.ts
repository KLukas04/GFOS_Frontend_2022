import { HttpErrorResponse } from '@angular/common/http';
import { RemoteData } from 'ngx-remotedata';
import { Applicant } from './applicant.model';

export interface ApplicationDetails {
  image: RemoteData<string, HttpErrorResponse>;
  cvPdf: RemoteData<string, HttpErrorResponse>;
  letterPdf: RemoteData<string, HttpErrorResponse>;
  applicant: RemoteData<Applicant, HttpErrorResponse>;
}
