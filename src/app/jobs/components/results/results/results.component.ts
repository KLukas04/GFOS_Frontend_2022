import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoteData } from 'ngx-remotedata';
import { Observable } from 'rxjs';
import { Job } from 'src/app/jobs/models/job.model';

import * as fromReducer from '../../../store/jobs.reducer';
import * as fromSelectors from '../../../store/jobs.selectors';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  public jobs$: Observable<RemoteData<Job[], HttpErrorResponse>>;

  constructor(private store: Store<fromReducer.JobsState>) {
    this.jobs$ = this.store.select(fromSelectors.selectFilterResults);
  }

  ngOnInit(): void {}
}
