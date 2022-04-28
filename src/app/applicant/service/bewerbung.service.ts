import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bewerbung } from '../models/bewerbung.model';

@Injectable({
  providedIn: 'root',
})
export class BewerbungService {
  private baseURL = environment.baseURL;

  constructor(private http: HttpClient) {}

  public getSentApplications(): Observable<Bewerbung[]> {
    return this.http
      .get<Bewerbung[]>(`${this.baseURL}/bewerbung`)
      .pipe(take(1));
  }

  public deleteApplication(id: number): Observable<string> {
    return this.http
      .delete<any>(`${this.baseURL}/bewerbung/${id}`)
      .pipe(take(1));
  }
}
