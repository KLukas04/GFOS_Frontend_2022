import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

import * as fromActions from '../../store/applicant.actions';
import * as fromReducer from '../../store/applicant.reducer';

@Component({
  selector: 'app-interest-dialog',
  templateUrl: './interest-dialog.component.html',
  styleUrls: ['./interest-dialog.component.scss'],
})
export class InterestDialogComponent implements OnInit {
  public nameControl: FormControl;

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<any>,
    private store: Store<fromReducer.ApplicantState>
  ) {
    this.nameControl = new FormControl(null);
  }

  ngOnInit(): void {}

  public saveName(): void {
    this.store.dispatch(
      fromActions.newInteresseName({ name: this.nameControl.value })
    );
  }

  close(): void {
    this.store.dispatch(fromActions.newInteresseAdd());
    this.context.completeWith(null);
  }
}
