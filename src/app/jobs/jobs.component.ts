import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoteData } from 'ngx-remotedata';
import { Observable } from 'rxjs';
import { Fachgebiet } from './models/fachgebiet.model';
import { Job } from './models/job.model';

import * as fromActions from './store/jobs.actions';
import * as fromReducer from './store/jobs.reducer';
import * as fromSelectors from './store/jobs.selectors';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  public trendJobs$: Observable<RemoteData<Job[], HttpErrorResponse>>;
  public fachgebiete$: Observable<RemoteData<Fachgebiet[], HttpErrorResponse>>;

  constructor(private store: Store<fromReducer.JobsState>) {
    this.trendJobs$ = this.store.select(fromSelectors.selectTrendJobs);
    this.fachgebiete$ = this.store.select(fromSelectors.selectAllFachgebiete);
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadTrendJobs());
    this.store.dispatch(fromActions.loadFachgebiete());
  }
}
