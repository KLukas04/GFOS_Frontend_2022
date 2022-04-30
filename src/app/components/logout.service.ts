import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  private baseURL = environment.baseURL;

  constructor(private http: HttpClient, private router: Router) {}

  public logout(): Observable<string> {
    this.router.navigateByUrl('auth');
    localStorage.removeItem('token');
    return this.http.delete<any>(`${this.baseURL}/anmeldung`).pipe(take(1));
  }
}
