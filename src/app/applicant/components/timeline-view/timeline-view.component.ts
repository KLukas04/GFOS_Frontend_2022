import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoteData } from 'ngx-remotedata';
import { Observable } from 'rxjs';
import { LebenslaufStation } from '../../models/lebenslaufstation.model';

import * as fromReducer from '../../store/applicant.reducer';
import * as fromSelectors from '../../store/applicant.selectors';
@Component({
  selector: 'app-timeline-view',
  templateUrl: './timeline-view.component.html',
  styleUrls: ['./timeline-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineViewComponent {
  value = '';
  year = '';
  open = false;

  public stationen$: Observable<
    RemoteData<LebenslaufStation[], HttpErrorResponse>
  >;

  constructor(
    private store: Store<fromReducer.ApplicantState>
  ) {
    this.stationen$ = this.store.select(
      fromSelectors.selectLebenslaufStationen
    );
  }

  getDateFormat(startI: string, endI: string): string {
    const start = new Date(startI);
    const end = new Date(endI);

    const difference = end.getTime() - start.getTime();
    const days = difference / (1000 * 3600 * 24);

    return days > 365 ? 'YYYY' : 'longDate';
  }
}
