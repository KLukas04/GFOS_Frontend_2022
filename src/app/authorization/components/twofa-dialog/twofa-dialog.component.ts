import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

import * as fromActions from '../../store/authorization.actions';
import * as fromReducer from '../../store/authorization.reducer';

@Component({
  selector: 'app-twofa-dialog',
  templateUrl: './twofa-dialog.component.html',
  styleUrls: ['./twofa-dialog.component.scss'],
})
export class TwofaDialogComponent implements OnInit {
  public pinForm: FormControl;

  constructor(
    private store: Store<fromReducer.AuthorizationState>,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<any>
  ) {
    this.pinForm = new FormControl(null);
  }

  ngOnInit(): void {}

  savePin(): void {
    this.store.dispatch(fromActions.newTwoFaPin({ pin: this.pinForm.value }));
  }

  close(): void {
    this.store.dispatch(fromActions.tryTwoFaPin());
    this.context.completeWith(null);
  }
}
