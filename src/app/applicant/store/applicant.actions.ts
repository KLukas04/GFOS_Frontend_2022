import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { TuiDayRange } from '@taiga-ui/cdk';
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

export const newLebenslaufStationStartEnd = createAction(
  '[CV] [Stationen] New Start/End Inserted',
  props<{ date: TuiDayRange }>()
);

export const newLebenslaufStationInfo = createAction(
  '[CV] [Stationen] New Info Inserted',
  props<{ info: string }>()
);

export const newLebenslaufStationAdd = createAction(
  '[CV] [Stationen] Add New Station'
);
