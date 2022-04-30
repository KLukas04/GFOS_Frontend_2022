import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employer } from '../models/employer.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private baseURL = environment.baseURL;

  constructor(private http: HttpClient) {}

  public getSelf(): Observable<Employer> {
    return this.http.get<Employer>(`${this.baseURL}/personaler`).pipe(take(1));
  }

  public saveNewEmployer(data: {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
    password: string | null;
    section: string | null;
  }): Observable<string> {
    return this.http
      .post<any>(`${this.baseURL}/personaler`, {
        name: data.lastName,
        vorname: data.firstName,
        email: data.email,
        passworthash: data.password,
        telefon: data.phone,
        neuesfachgebiet: data.section,
      })
      .pipe(take(1));
  }

  public getPicById(id: number): Observable<string> {
    return this.http
      .get<string>(`${this.baseURL}/foto/profilbild/${id}`)
      .pipe(take(1));
  }
}
