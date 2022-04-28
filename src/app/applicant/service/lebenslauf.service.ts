import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Interessenfeld } from '../models/interessenfeld.model';
import { LebenslaufStation } from '../models/lebenslaufstation.model';

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
    end: Date,
    info: string
  ): Observable<string> {
    return this.http
      .post<any>(`${this.baseURL}/lebenslauf`, {
        start: start,
        ende: end,
        info: info,
      })
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
}
