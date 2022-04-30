import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoteData } from 'ngx-remotedata';
import { Observable } from 'rxjs';
import { Application } from 'src/app/employer/models/application.model';

import * as fromActions from '../../../store/employer.actions';
import * as fromReducer from '../../../store/employer.reducer';
import * as fromSelectors from '../../../store/employer.selectors';
@Component({
  selector: 'app-applications-for-job',
  templateUrl: './applications-for-job.component.html',
  styleUrls: ['./applications-for-job.component.scss'],
})
export class ApplicationsForJobComponent implements OnInit {
  public applications$: Observable<
    RemoteData<Application[], HttpErrorResponse>
  >;

  constructor(private store: Store<fromReducer.EmployerState>) {
    this.applications$ = this.store.select(
      fromSelectors.selectApplicationsForJob
    );
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadApplicationsForJob());
  }
}
