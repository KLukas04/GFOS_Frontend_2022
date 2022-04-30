import { HttpErrorResponse } from '@angular/common/http';
import { RemoteData } from 'ngx-remotedata';
import { Applicant } from './applicant.model';
import { Interesse } from './interesse.model';

export interface ApplicationDetails {
  image: RemoteData<string, HttpErrorResponse>;
  cvPdf: RemoteData<string, HttpErrorResponse>;
  letterPdf: RemoteData<string, HttpErrorResponse>;
  applicant: RemoteData<Applicant, HttpErrorResponse>;
  interests: RemoteData<Interesse[], HttpErrorResponse>;
}
