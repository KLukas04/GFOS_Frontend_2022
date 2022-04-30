import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Application } from '../models/application.model';
import { Fachgebiet } from '../models/fachgebiet.model';
import { Filter } from '../models/filter.model';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private baseURL = environment.baseURL;

  constructor(private http: HttpClient) {}

  public getTrendJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.baseURL}/jobs/pinned`).pipe(take(1));
  }

  public getAllFachgebiete(): Observable<Fachgebiet[]> {
    return this.http
      .get<Fachgebiet[]>(`${this.baseURL}/fachgebiet/all`)
      .pipe(take(1));
  }

  public getJobById(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.baseURL}/jobs/${id}`).pipe(take(1));
  }

  public apply(id: number, letter: string): Observable<Application> {
    return this.http
      .post<any>(`${this.baseURL}/bewerbung`, {
        datum: new Date(),
        jobangebotid: id,
        neuesbewerbungsschreiben: letter,
      })
      .pipe(take(1));
  }

  public searchJobs(data: Filter): Observable<Job[]> {
    let reqData = {};

    data.fachgebiet !== null
      ? (reqData = { ...reqData, fachgebiet: data.fachgebiet })
      : null;
    data.typ !== null ? (reqData = { ...reqData, typ: data.typ }) : null;
    data.istremote !== null && data.istremote !== false
      ? (reqData = { ...reqData, istremote: data.istremote })
      : null;
    data.istbefristet !== null && data.istbefristet !== false
      ? (reqData = { ...reqData, istbefristet: data.istbefristet })
      : null;
    data.jahresgehalt !== null
      ? (reqData = { ...reqData, jahresgehalt: data.jahresgehalt })
      : null;
    data.urlaubstage !== null
      ? (reqData = { ...reqData, urlaubstage: data.urlaubstage })
      : null;

    return this.http
      .post<any>(`${this.baseURL}/jobs/search`, reqData)
      .pipe(take(1));
  }
}
