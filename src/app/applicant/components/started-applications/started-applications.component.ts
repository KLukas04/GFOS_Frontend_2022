import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoteData } from 'ngx-remotedata';
import { Observable } from 'rxjs';
import { Bewerbung } from '../../models/bewerbung.model';

import * as fromActions from '../../store/applicant.actions';
import * as fromReducer from '../../store/applicant.reducer';
import * as fromSelectors from '../../store/applicant.selectors';
@Component({
  selector: 'app-started-applications',
  templateUrl: './started-applications.component.html',
  styleUrls: ['./started-applications.component.scss'],
})
export class StartedApplicationsComponent implements OnInit {
  public applications$: Observable<RemoteData<Bewerbung[], HttpErrorResponse>>;

  constructor(private store: Store<fromReducer.ApplicantState>) {
    this.applications$ = this.store.select(
      fromSelectors.selectSentApplications
    );
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadSentApplications());
  }
}
