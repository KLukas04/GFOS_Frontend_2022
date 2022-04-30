import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RemoteData } from 'ngx-remotedata';
import { Observable } from 'rxjs';
import { Job } from 'src/app/jobs/models/job.model';

import * as fromActions from '../../../store/jobs.actions';
import * as fromReducer from '../../../store/jobs.reducer';
import * as fromSelectors from '../../../store/jobs.selectors';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent implements OnInit {
  readonly control = new FormControl();
  applicationAlreadySended = false;

  public job$: Observable<RemoteData<Job, HttpErrorResponse>>;

  constructor(private store: Store<fromReducer.JobsState>) {
    this.job$ = this.store.select(fromSelectors.selectSingleJob);
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadSingleJob());
  }
}
