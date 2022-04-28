import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromActions from '../../store/applicant.actions';
import * as fromReducer from '../../store/applicant.reducer';
@Component({
  selector: 'app-application-list-item',
  templateUrl: './application-list-item.component.html',
  styleUrls: ['./application-list-item.component.scss'],
})
export class ApplicationListItemComponent implements OnInit {
  @Input() id: number = 100000000;
  @Input() title = '';
  @Input() typ = '';
  @Input() startDate: Date | undefined;
  @Input() description = '';
  @Input() alreadyApplied = true;
  @Input() status = 0;

  constructor(private store: Store<fromReducer.ApplicantState>) {}

  ngOnInit(): void {}

  statusToString(): string {
    if (this.status === 0) {
      return 'Abgeschickt';
    } else if (this.status === 1) {
      return 'In Bearbeitung';
    } else if (this.status === 2) {
      return 'Abgelehnt';
    } else if (this.status === 3) {
      return 'Angenommen';
    }

    return 'Fehler';
  }

  deleteApplication() {
    console.log('Delete');
    this.store.dispatch(fromActions.deleteApplication({ id: this.id }));
  }
}
