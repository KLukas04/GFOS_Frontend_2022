import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRes } from '../models/loginRes.model';
import { RegistrationData } from '../models/registrationData.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseURL = environment.baseURL;

  constructor(private http: HttpClient) {}

  public tryToLogin(email: string, password: string): Observable<LoginRes> {
    return this.http
      .post<any>(`${this.baseURL}/anmeldung`, {
        mail: email,
        passwort: password,
      })
      .pipe(take(1));
  }

  public tryRegistration(data: RegistrationData): Observable<string> {
    return this.http
      .post<any>(`${this.baseURL}/bewerber`, {
        name: data.lastname,
        vorname: data.firstname,
        email: data.email,
        passworthash: data.password,
      })
      .pipe(take(1));
  }

  public tryVerificationPin(data: {
    email: string;
    password: string;
    pin: string;
  }): Observable<string> {
    return this.http
      .post<any>(`${this.baseURL}/bewerber/verify`, {
        mail: data.email,
        passwort: data.password,
        authcode: data.pin,
      })
      .pipe(take(1));
  }
}
