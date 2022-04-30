import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RemoteData } from 'ngx-remotedata';
import { map, Observable } from 'rxjs';
import { Job } from 'src/app/jobs/models/job.model';

import * as fromActions from '../../../store/jobs.actions';
import * as fromReducer from '../../../store/jobs.reducer';
import * as fromSelectors from '../../../store/jobs.selectors';
import * as fromRouter from '../../../../store/router.selectors';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent implements OnInit {
  readonly control = new FormControl();

  public job$: Observable<RemoteData<Job, HttpErrorResponse>>;

  public showChat$: Observable<boolean>;

  constructor(private store: Store<fromReducer.JobsState>) {
    this.job$ = this.store.select(fromSelectors.selectSingleJob);

    this.showChat$ = this.store
      .select(fromRouter.selectQueryParams)
      .pipe(map((params) => params['showChat']));
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadSingleJob());
  }
}
