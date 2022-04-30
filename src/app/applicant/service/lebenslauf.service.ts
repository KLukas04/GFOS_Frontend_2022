import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../models/account.model';
import { Address } from '../models/address.model';
import { Interessenfeld } from '../models/interessenfeld.model';
import { LebenslaufStation } from '../models/lebenslaufstation.model';
import { Settings } from '../models/settings.model';

@Injectable({
  providedIn: 'root',
})
export class LebenslaufService {
  private baseURL = environment.baseURL;

  constructor(private http: HttpClient) {}

  public getLebenslaufStationen(): Observable<LebenslaufStation[]> {
    return this.http
      .get<LebenslaufStation[]>(`${this.baseURL}/lebenslauf`)
      .pipe(take(1));
  }

  public addLebenslaufStation(
    start: Date,
    ende: Date,
    info: string,
    referenz: string | null
  ): Observable<string> {
    let data = {};
    start !== null ? (data = { ...data, start }) : null;
    ende !== null ? (data = { ...data, ende }) : null;
    info !== null ? (data = { ...data, info }) : null;
    referenz !== null ? (data = { ...data, string: referenz }) : null;

    console.log(data);

    return this.http
      .post<any>(`${this.baseURL}/lebenslauf`, data)
      .pipe(take(1));
  }

  public getInteressenfelder(): Observable<Interessenfeld[]> {
    return this.http
      .get<Interessenfeld[]>(`${this.baseURL}/interessenfeld`)
      .pipe(take(1));
  }

  public addInteressenfeld(name: string): Observable<string> {
    return this.http
      .post<any>(`${this.baseURL}/interessenfeld`, {
        name: name,
      })
      .pipe(take(1));
  }

  public getOwnAccount(): Observable<Account> {
    return this.http.get<Account>(`${this.baseURL}/bewerber`).pipe(take(1));
  }

  public updateAccount(
    firstName: string | null,
    lastName: string | null,
    email: string | null,
    phone: string | null
  ): Observable<string> {
    let data = {};

    firstName !== null ? (data = { ...data, vorname: firstName }) : null;
    lastName !== null ? (data = { ...data, nachname: lastName }) : null;
    email !== null ? (data = { ...data, mail: email }) : null;
    phone !== null ? (data = { ...data, telefon: phone }) : null;

    return this.http.put<any>(`${this.baseURL}/bewerber`, data).pipe(take(1));
  }

  public getOwnAddress(): Observable<Address> {
    return this.http.get<Address>(`${this.baseURL}/adresse`).pipe(take(1));
  }

  public updateAddress(
    street: string | null,
    number: string | null,
    plz: number | null,
    town: string | null,
    country: string | null
  ): Observable<string> {
    let data = {};

    street !== null ? (data = { ...data, strasse: street }) : null;
    number !== null ? (data = { ...data, hausnummer: number }) : null;
    plz !== null ? (data = { ...data, plz: plz }) : null;
    town !== null ? (data = { ...data, stadt: town }) : null;
    country !== null ? (data = { ...data, land: country }) : null;

    return this.http.put<any>(`${this.baseURL}/adresse`, data).pipe(take(1));
  }

  public getOwnSettings(): Observable<Settings> {
    return this.http
      .get<Settings>(`${this.baseURL}/bewerbereinstellungen`)
      .pipe(take(1));
  }

  public updateSettings(getMails: boolean, twoFa: boolean): Observable<string> {
    return this.http
      .put<any>(`${this.baseURL}/bewerbereinstellungen`, {
        getmails: getMails,
        twofa: twoFa,
      })
      .pipe(take(1));
  }

  public getProfilePic(): Observable<string> {
    return this.http
      .get<string>(`${this.baseURL}/foto/profilbild`)
      .pipe(take(1));
  }

  public uploadProfilePic(base64: string): Observable<string> {
    return this.http
      .post<any>(`${this.baseURL}/foto/profilbild`, {
        string: base64,
      })
      .pipe(take(1));
  }

  public getCvPdf(): Observable<string> {
    return this.http
      .get<string>(`${this.baseURL}/datei/lebenslauf`)
      .pipe(take(1));
  }

  public uploadCvPdf(base64: string): Observable<string> {
    return this.http
      .post<any>(`${this.baseURL}/datei/lebenslauf`, {
        string: base64,
      })
      .pipe(take(1));
  }

  public deleteCvPdf(): Observable<string> {
    return this.http
      .delete<any>(`${this.baseURL}/datei/lebenslauf`)
      .pipe(take(1));
  }
}
