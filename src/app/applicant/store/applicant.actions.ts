import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { TuiDayRange } from '@taiga-ui/cdk';
import { Account } from '../models/account.model';
import { Interessenfeld } from '../models/interessenfeld.model';
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

export const loadInteressenfelder = createAction(
  '[CV] [Interessenfelder] Load Interessenfelder'
);

export const loadInteressenfelderSuccess = createAction(
  '[CV] [Interessenfelder] Load Interessenfelder Success',
  props<{ felder: Interessenfeld[] }>()
);

export const loadInteressenfelderError = createAction(
  '[CV] [Interessenfelder] Load Interessenfelder Error',
  props<{ error: HttpErrorResponse }>()
);

export const newInteresseName = createAction(
  '[CV] [Interessenfelder] New Name Inserted',
  props<{ name: string }>()
);

export const newInteresseAdd = createAction(
  '[CV] [Interessenfelder] Add New Interesse'
);

export const loadOwnAccount = createAction('[CV] [Kontakt] Load Kontakt');

export const loadOwnAccountSuccess = createAction(
  '[CV] [Kontakt] Load Kontakt Success',
  props<{ account: Account }>()
);

export const loadOwnAccountError = createAction(
  '[CV] [Kontakt] Load Kontakt Error',
  props<{ error: HttpErrorResponse }>()
);
