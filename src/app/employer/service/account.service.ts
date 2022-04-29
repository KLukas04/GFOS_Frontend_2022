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
}
