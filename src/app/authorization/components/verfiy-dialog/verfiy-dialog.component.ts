import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TuiDialogContext, TUI_HINT_OPTIONS } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

import * as fromActions from '../../store/authorization.actions';
import * as fromReducer from '../../store/authorization.reducer';

@Component({
  selector: 'app-verfiy-dialog',
  templateUrl: './verfiy-dialog.component.html',
  styleUrls: ['./verfiy-dialog.component.scss'],
})
export class VerfiyDialogComponent implements OnInit {
  public pinForm: FormControl;

  constructor(
    private store: Store<fromReducer.AuthorizationState>,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<any>,
    private router: Router
  ) {
    this.pinForm = new FormControl(null);
  }

  ngOnInit(): void {}

  savePin(): void {
    this.store.dispatch(
      fromActions.newVerificationPin({ pin: this.pinForm.value })
    );
  }

  close(): void {
    this.store.dispatch(fromActions.tryVerificationPin());
    this.context.completeWith(null);
    this.router.navigateByUrl('jobs');
  }
}
