import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoteData } from 'ngx-remotedata';
import { Observable } from 'rxjs';
import { Account } from '../../models/account.model';

import * as fromActions from '../../store/applicant.actions';
import * as fromReducer from '../../store/applicant.reducer';
import * as fromSelectors from '../../store/applicant.selectors';
@Component({
  selector: 'app-greetings-header',
  templateUrl: './greetings-header.component.html',
  styleUrls: ['./greetings-header.component.scss'],
})
export class GreetingsHeaderComponent implements OnInit {
  @Input() amoutOfApplicaions: number = 0;

  public name$: Observable<RemoteData<Account, HttpErrorResponse>>;

  constructor(private store: Store<fromReducer.ApplicantState>) {
    this.name$ = this.store.select(fromSelectors.selectOwnAccount);
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadOwnAccount());
  }
}
