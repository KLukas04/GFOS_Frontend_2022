import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { RemoteData } from 'ngx-remotedata';
import { Observable } from 'rxjs';
import { Job } from 'src/app/jobs/models/job.model';
import { Message } from 'src/app/jobs/models/message.model';

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
  public messageControl: FormControl = new FormControl(null);
  readonly control = new FormControl();
  private newFileBase64: any = '';

  public showChat: boolean | undefined;

  public job$: Observable<RemoteData<Job, HttpErrorResponse>>;
  public messages$: Observable<RemoteData<Message[], HttpErrorResponse>>;

  constructor(
    private store: Store<fromReducer.JobsState>,
    private route: ActivatedRoute
  ) {
    this.job$ = this.store.select(fromSelectors.selectSingleJob);
    this.messages$ = this.store.select(fromSelectors.selectDetailsMessages);

    this.route.queryParams.subscribe((params) => {
      this.showChat = params['showChat'] === 'true';
    });
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadSingleJob());
    this.store.dispatch(fromActions.loadApplicationDetailsMessages());
  }

  public messageInsert(): void {
    this.store.dispatch(
      fromActions.applicationDetailsNewMessageInserted({
        message: this.messageControl.value,
      })
    );
  }

  public sendMessage(): void {
    this.store.dispatch(fromActions.applicationDetailsNewMessageSent());
    this.messageControl.reset();
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
