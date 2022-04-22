import { ActionReducerMap } from '@ngrx/store';

import * as fromAuthorization from '../authorization/store/authorization.reducer';
import * as fromJobs from '../jobs/store/jobs.reducer';

export interface RootState {}

export const reducers: ActionReducerMap<RootState> = {
  authorization: fromAuthorization.reducer,
  jobs: fromJobs.reducer,
};
