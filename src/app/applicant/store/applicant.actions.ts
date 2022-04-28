import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { TuiDayRange } from '@taiga-ui/cdk';
import { Account } from '../models/account.model';
import { Address } from '../models/address.model';
import { Bewerbung } from '../models/bewerbung.model';
import { Interessenfeld } from '../models/interessenfeld.model';
import { LebenslaufStation } from '../models/lebenslaufstation.model';
import { Settings } from '../models/settings.model';

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

export const newKontaktFirstName = createAction(
  '[CV] [Kontakt] New Vorname Inserted',
  props<{ firstName: string }>()
);

export const newKontaktLastName = createAction(
  '[CV] [Kontakt] New Nachname Inserted',
  props<{ lastName: string }>()
);

export const newKontaktEmailName = createAction(
  '[CV] [Kontakt] New Email Inserted',
  props<{ email: string }>()
);

export const newKontaktPhoneName = createAction(
  '[CV] [Kontakt] New Telefon Inserted',
  props<{ phone: string }>()
);

export const newKontaktUpdate = createAction('[CV] [Kontakt] Updated Account');

export const loadOwnAdress = createAction('[CV] [Adresse] Load Adresse');

export const loadOwnAdressSuccess = createAction(
  '[CV] [Adresse] Load Adresse Success',
  props<{ address: Address }>()
);

export const loadOwnAdressError = createAction(
  '[CV] [Adresse] Load Adresse Error',
  props<{ error: HttpErrorResponse }>()
);

export const newAddressStreet = createAction(
  '[CV] [Adresse] New Straße Inserted',
  props<{ street: string }>()
);

export const newAddressNumber = createAction(
  '[CV] [Adresse] New Hausnummer Inserted',
  props<{ number: string }>()
);

export const newAddressPlz = createAction(
  '[CV] [Adresse] New PLZ Inserted',
  props<{ plz: number }>()
);

export const newAddressTown = createAction(
  '[CV] [Adresse] New Stadt Inserted',
  props<{ town: string }>()
);

export const newAddressCountry = createAction(
  '[CV] [Adresse] New Land Inserted',
  props<{ country: string }>()
);

export const newAddressUpdate = createAction('[CV] [Adresse] Updated Address');

export const loadOwnSettings = createAction(
  '[CV] [Einstellungen] Load Einstellungen'
);

export const loadOwnSettingsSuccess = createAction(
  '[CV] [Einstellungen] Load Einstellungen Success',
  props<{ settings: Settings }>()
);

export const loadOwnSettingsError = createAction(
  '[CV] [Einstellungen] Load Einstellungen Error',
  props<{ error: HttpErrorResponse }>()
);

export const changeGetMailsSetting = createAction(
  '[CV] [Einstellungen] Change GetMails Setting'
);

export const changeTwoFaSetting = createAction(
  '[CV] [Einstellungen] Change Two-FA Setting'
);

export const newSettingsUpdate = createAction(
  '[CV [Einstellungen] Updated Settings'
);

export const loadSentApplications = createAction(
  '[CV] [Bewerbungen] Load Bewerbungen'
);

export const loadSentApplicationsSuccess = createAction(
  '[CV] [Bewerbungen] Load Bewerbungen Success',
  props<{ applications: Bewerbung[] }>()
);

export const loadSentApplicationsError = createAction(
  '[CV] [Bewerbungen] Load Bewerbungen Error',
  props<{ error: HttpErrorResponse }>()
);

export const deleteApplication = createAction(
  '[CV] [Bewerbung] Delete Bewerbung',
  props<{ id: number }>()
);

export const uploadNewProfilePic = createAction(
  '[CV] [Profilbild] New Profile Pic',
  props<{ base64: string }>()
);
