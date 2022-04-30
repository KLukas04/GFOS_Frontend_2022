import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Fachgebiet } from '../models/fachgebiet.model';
import { Job } from '../models/job.model';

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
