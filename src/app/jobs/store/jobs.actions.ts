import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import * as fromReducer from './jobs.reducer';

@Injectable()
export class JobsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromReducer.JobsState>
  ) {}
}
