import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
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
