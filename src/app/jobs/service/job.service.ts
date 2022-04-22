import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
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
}
