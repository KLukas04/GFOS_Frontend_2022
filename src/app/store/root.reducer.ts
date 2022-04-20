import { ActionReducerMap } from '@ngrx/store';

import * as fromAuthorization from '../authorization/store/authorization.reducer';

export interface RootState {}

export const reducers: ActionReducerMap<RootState> = {
  authorization: fromAuthorization.reducer,
};
