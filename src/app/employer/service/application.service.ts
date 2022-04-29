import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Application } from '../models/application.model';

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
}