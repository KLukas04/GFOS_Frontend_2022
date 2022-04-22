import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoteData } from 'ngx-remotedata';
import { Observable } from 'rxjs';
import { Job } from 'src/app/jobs/models/job.model';

import * as fromReducer from '../../../store/jobs.reducer';
import * as fromSelectors from '../../../store/jobs.selectors';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss'],
})
export class TrendsComponent implements OnInit {
  public carouselIndex = 0;
  public numberOfItems = 4;

  public trendJobs$: Observable<RemoteData<Job[], HttpErrorResponse>>;

  constructor(private store: Store<fromReducer.JobsState>) {
    this.trendJobs$ = this.store.select(fromSelectors.selectTrendJobs);
  }

  ngOnInit(): void {}
}
