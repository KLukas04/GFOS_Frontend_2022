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
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.scss'],
})
export class MyApplicationsComponent implements OnInit {
  public applications$: Observable<
    RemoteData<Application[], HttpErrorResponse>
  >;

  constructor(private store: Store<fromReducer.EmployerState>) {
    this.applications$ = this.store.select(fromSelectors.selectApplications);
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadApplications());
  }
}
