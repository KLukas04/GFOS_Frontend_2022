import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { LebenslaufStation } from '../models/lebenslaufstation.model';

export const loadLebenslaufStationen = createAction(
  '[CV] [Stationen] Load Stationen'
);

export const loadLebenslaufStationenSuccess = createAction(
  '[CV] [Stationen] Load Stationen Success',
  props<{ stationen: LebenslaufStation[] }>()
);

export const loadLebenslaufStationenError = createAction(
  '[CV] [Stationen] Load Stationen Error',
  props<{ error: HttpErrorResponse }>()
);
