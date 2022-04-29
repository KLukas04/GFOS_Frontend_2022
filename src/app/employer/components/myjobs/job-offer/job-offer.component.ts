import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromActions from '../../../store/employer.actions';
import * as fromReducer from '../../../store/employer.reducer';
@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss'],
})
export class JobOfferComponent implements OnInit {
  @Input() title = '';
  @Input() typ = '';
  @Input() startDate: Date | undefined;
  @Input() description = '';
  @Input() id: number | undefined;
  @Input() pinned: boolean | undefined;

  public angepinntControl: FormControl = new FormControl(false);

  constructor(private store: Store<fromReducer.EmployerState>) {
    setTimeout(() => {
      this.angepinntControl.setValue(this.pinned);
    }, 50);
  }

  ngOnInit(): void {}

  public deleteJob(): void {
    this.store.dispatch(fromActions.deleteJob({ id: this.id ?? 100000000 }));
  }

  public pinJob(): void {
    const action: boolean = !this.angepinntControl.value; //muss umgedreht werden, weil Methode triggert vor FormControl change

    action
      ? this.store.dispatch(fromActions.pinJob({ id: this.id ?? 10000000 }))
      : null;
  }
}
