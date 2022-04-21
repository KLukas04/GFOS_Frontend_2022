import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.http.post<any>(`${this.baseURL}/anmeldung`, {
      mail: email,
      passwort: password,
    });
  }

  public tryRegistration(data: RegistrationData): Observable<string> {
    return this.http.post<any>(`${this.baseURL}/bewerber`, {
      name: data.lastname,
      vorname: data.firstname,
      email: data.email,
      passworthash: data.password,
    });
  }
}
