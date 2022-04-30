import { HttpErrorResponse } from '@angular/common/http';
import { RemoteData } from 'ngx-remotedata';

export interface ApplicationDetails {
  image: RemoteData<string, HttpErrorResponse>;
  cvPdf: RemoteData<string, HttpErrorResponse>;
}
