import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoteData } from 'ngx-remotedata';
import { Observable } from 'rxjs';
import { Job } from 'src/app/employer/models/job.model';

import * as fromActions from '../../../store/employer.actions';
import * as fromReducer from '../../../store/employer.reducer';
import * as fromSelectors from '../../../store/employer.selectors';
@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.scss'],
})
export class MyJobsComponent implements OnInit {
  public jobs$: Observable<RemoteData<Job[], HttpErrorResponse>>;

  constructor(private store: Store<fromReducer.EmployerState>) {
    this.jobs$ = this.store.select(fromSelectors.selectCreatedJobs);
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadCreatedJobs());
  }
}
