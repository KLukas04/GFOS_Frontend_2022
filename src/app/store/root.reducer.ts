import { ActionReducerMap } from '@ngrx/store';

import * as fromAuthorization from '../authorization/store/authorization.reducer';
import * as fromJobs from '../jobs/store/jobs.reducer';
import * as fromApplicant from '../applicant/store/applicant.reducer';

export interface RootState {}

export const reducers: ActionReducerMap<RootState> = {
  authorization: fromAuthorization.reducer,
  jobs: fromJobs.reducer,
  applicant: fromApplicant.reducer,
};
