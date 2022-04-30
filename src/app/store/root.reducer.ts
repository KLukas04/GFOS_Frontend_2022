import { ActionReducerMap } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';
import * as fromAuthorization from '../authorization/store/authorization.reducer';
import * as fromJobs from '../jobs/store/jobs.reducer';
import * as fromApplicant from '../applicant/store/applicant.reducer';
import * as fromEmployer from '../employer/store/employer.reducer';

export interface RootState {}

export const reducers: ActionReducerMap<RootState> = {
  router: fromRouter.routerReducer,
  authorization: fromAuthorization.reducer,
  jobs: fromJobs.reducer,
  applicant: fromApplicant.reducer,
  employer: fromEmployer.reducer,
};
