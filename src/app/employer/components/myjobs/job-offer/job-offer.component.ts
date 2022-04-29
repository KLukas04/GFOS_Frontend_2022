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

  angepinnt: FormControl = new FormControl(true);

  constructor(private store: Store<fromReducer.EmployerState>) {}

  ngOnInit(): void {}

  public deleteJob(): void {
    this.store.dispatch(fromActions.deleteJob({ id: this.id ?? 100000000 }));
  }
}
