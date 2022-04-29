import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private baseURL = environment.baseURL;

  constructor(private http: HttpClient) {}

  public createNewJob(
    title: string,
    kurzbeschreibung: string,
    langbeschreibung: string,
    monatsgehalt: number,
    jahresgehalt: number,
    urlaubstage: number,
    istremote: boolean,
    vorteile: string,
    einstelldatum: Date,
    bewerbungsfrist: Date,
    istbefristet: boolean,
    start: Date | null,
    ende: Date | null,
    strasse: string,
    hausnummer: string,
    plz: number,
    stadt: string,
    land: string,
    bewerbungstyp: string,
    fachgebiet: string
  ): Observable<Job> {
    start === null ? (start = new Date()) : null;
    ende === null ? (ende = new Date()) : null;

    return this.http
      .post<any>(`${this.baseURL}/jobs`, {
        title: title,
        kurzbeschreibung: kurzbeschreibung,
        langbeschreibung: langbeschreibung,
        monatsgehalt: monatsgehalt,
        jahresgehalt: jahresgehalt,
        urlaubstage: urlaubstage,
        istremote: istremote,
        vorteile: vorteile,
        einstelldatum: einstelldatum,
        bewerbungsfrist: bewerbungsfrist,
        istbefristet: istbefristet,
        start: start,
        ende: ende,
        neueadresse: {
          strasse: strasse,
          hausnummer: hausnummer,
          plz: plz,
          stadt: stadt,
          land: land,
        },
        neuerbewerbungstyp: bewerbungstyp,
        neuesfachgebiet: fachgebiet,
      })
      .pipe(take(1));
  }

  public getCreatedJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.baseURL}/jobs/created`).pipe(take(1));
  }

  public deleteJob(id: number): Observable<string> {
    return this.http.delete<any>(`${this.baseURL}/jobs/${id}`).pipe(take(1));
  }
}
