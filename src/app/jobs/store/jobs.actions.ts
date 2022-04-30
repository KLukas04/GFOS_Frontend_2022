import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Fachgebiet } from '../models/fachgebiet.model';
import { Job } from '../models/job.model';
import { Message } from '../models/message.model';

export const loadTrendJobs = createAction('[Jobs] Load Trend Jobs');

export const loadTrendJobsSuccess = createAction(
  '[Jobs] Load Trend Jobs Success',
  props<{ jobs: Job[] }>()
);

export const loadTrendJobsError = createAction(
  '[Jobs] Load Trend Jobs Error',
  props<{ error: HttpErrorResponse }>()
);

export const loadFachgebiete = createAction('[Jobs] Load Fachgebiete');

export const loadFachgebieteSuccess = createAction(
  '[Jobs] Load Fachgebiete Success',
  props<{ fachgebiete: Fachgebiet[] }>()
);

export const loadFachgebieteError = createAction(
  '[Jobs] Load Fachgebiete Error',
  props<{ error: HttpErrorResponse }>()
);

export const loadSingleJob = createAction('[Jobs] [Details] Load Single Job');

export const loadSingleJobSuccess = createAction(
  '[Jobs] [Details] Load Single Job Success',
  props<{ job: Job }>()
);

export const loadSingleJobError = createAction(
  '[Jobs] [Details] Load Single Job Error',
  props<{ error: HttpErrorResponse }>()
);

export const newLetterInsert = createAction(
  '[Jobs] [Details] New Letter Inserted',
  props<{ letter: string }>()
);

export const sendApplication = createAction(
  '[Jobs] [Details] Send Application'
);

export const sendApplicationSuccess = createAction(
  '[Jobs] [Details] Send Application Success'
);

export const sendApplicationError = createAction(
  '[Jobs] [Details] Send Application Error'
);

export const searchFilterFachgebiet = createAction(
  '[Jobs] [Search] New Fachgebiet Inserted',
  props<{ fachgebiet: string }>()
);

export const searchFilterType = createAction(
  '[Jobs] [Search] New Type Inserted',
  props<{ typ: string }>()
);

export const searchFilterRemote = createAction(
  '[Jobs] [Search] New Remote Inserted',
  props<{ remote: boolean }>()
);

export const searchFilterBefristet = createAction(
  '[Jobs] [Search] New Befristet Inserted',
  props<{ befristet: boolean }>()
);

export const searchFilterGehalt = createAction(
  '[Jobs] [Search] New Gehalt Inserted',
  props<{ gehalt: number }>()
);

export const searchFilterUrlaubstage = createAction(
  '[Jobs] [Search] New Urlaubstage Inserted',
  props<{ tage: number }>()
);

export const startSearch = createAction('[Jobs] [Search] Start Search');

export const startSearchSuccess = createAction(
  '[Jobs] [Search] Search Success',
  props<{ jobs: Job[] }>()
);

export const startSearchError = createAction(
  '[Jobs] [Search] Search Error',
  props<{ error: HttpErrorResponse }>()
);

export const loadApplicationDetailsMessages = createAction(
  '[Employer] [Details] Load Messages'
);

export const loadApplicationDetailsMessagesSuccess = createAction(
  '[Employer] [Details] Load Messages Success',
  props<{ messages: Message[] }>()
);

export const loadApplicationDetailsMessagesError = createAction(
  '[Employer] [Details] Load Messages Error',
  props<{ error: HttpErrorResponse }>()
);

export const applicationDetailsNewMessageInserted = createAction(
  '[Employer] [Details] New Message Inserted',
  props<{ message: string }>()
);

export const applicationDetailsNewMessageSent = createAction(
  '[Employer] [Details] New Message Sent'
);
