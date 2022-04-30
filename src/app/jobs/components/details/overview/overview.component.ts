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
  private newFileBase64: any = '';

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

  public loadNewPdf(event: any): void {
    const fileReader = new FileReader();
    const file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        this.newFileBase64 = fileReader.result;

        this.store.dispatch(
          fromActions.newLetterInsert({
            letter: this.newFileBase64,
          })
        );
      };
    }
  }

  public apply(): void {
    this.store.dispatch(fromActions.sendApplication());
    this.control.reset();
  }
}
