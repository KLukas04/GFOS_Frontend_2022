import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Applicant } from '../models/applicant.model';
import { Application } from '../models/application.model';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  private baseURL = environment.baseURL;

  constructor(private http: HttpClient) {}

  public getEditableApplications(): Observable<Application[]> {
    return this.http
      .get<Application[]>(`${this.baseURL}/bewerbung/zubearbeiten`)
      .pipe(take(1));
  }

  public getApplicationsForJob(id: number): Observable<Application[]> {
    return this.http
      .get<Application[]>(`${this.baseURL}/bewerbung/${id}`)
      .pipe(take(1));
  }

  public getCvPdfById(id: number): Observable<string> {
    return this.http
      .get<string>(`${this.baseURL}/datei/lebenslauf/${id}`)
      .pipe(take(1));
  }

  public getLetterPdfById(id: number): Observable<string> {
    return this.http
      .get<string>(`${this.baseURL}/datei/bewerbung/${id}`)
      .pipe(take(1));
  }

  public getApplicant(id: number): Observable<Applicant> {
    return this.http
      .get<Applicant>(`${this.baseURL}/bewerber/${id}`)
      .pipe(take(1));
  }

  public getMessages(id: number): Observable<Message[]> {
    return this.http
      .get<Message[]>(`${this.baseURL}/bewerbungsnachricht/${id}`)
      .pipe(take(1));
  }

  public sendMessage(id: number, text: string): Observable<Message> {
    return this.http
      .post<any>(`${this.baseURL}/bewerbungsnachricht`, {
        text: text,
        datum: new Date(),
        bewerbungid: id,
      })
      .pipe(take(1));
  }

  public setStatus(id: number, status: number): Observable<string> {
    return this.http
      .post<any>(`${this.baseURL}/bewerbung/status`, {
        bewerbung: id,
        status: status,
      })
      .pipe(take(1));
  }

  public getAcceptedApplications(): Observable<Application[]> {
    return this.http
      .get<Application[]>(`${this.baseURL}/bewerbung/angenommen`)
      .pipe(take(1));
  }
}
