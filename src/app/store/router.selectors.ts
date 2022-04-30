import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterState } from './router.serializer';

export const selectRouter = createFeatureSelector<RouterReducerState>('router');

export const selectRouterState = createSelector(
  selectRouter,
  (state: RouterReducerState<any>) => state.state
);

export const selectURL = createSelector(
  selectRouterState,
  (state: RouterState) => state.url
);

export const selectParams = createSelector(
  selectRouterState,
  (state: RouterState) => state.params
);

export const selectQueryParams = createSelector(
  selectRouterState,
  (state: RouterState) => state.queryParams
);
