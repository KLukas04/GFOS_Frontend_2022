import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromReducer from '../../store/applicant.reducer';
import * as fromActions from '../../store/applicant.actions';
import * as fromSelectors from '../../store/applicant.selectors';
import { Observable } from 'rxjs';
import { RemoteData } from 'ngx-remotedata';
import { LebenslaufStation } from '../../models/lebenslaufstation.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cv-editor',
  templateUrl: './cv-editor.component.html',
  styleUrls: ['./cv-editor.component.scss'],
})
export class CvEditorComponent implements OnInit {
  public avatar: string =
    'https://www.torsten-volkmer.de/wp-content/uploads/2017/06/20170613_011_by_TorstenVolkmer.jpg';
  newInterest = '';
  interests = ['Tennis', 'Klavier'];
  open = false;

  public stationen$: Observable<
    RemoteData<LebenslaufStation[], HttpErrorResponse>
  >;

  constructor(private store: Store<fromReducer.ApplicantState>) {
    this.stationen$ = this.store.select(
      fromSelectors.selectLebenslaufStationen
    );
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadLebenslaufStationen());
  }

  showDialog() {
    this.open = true;
    this.interests.push(this.newInterest);
  }
}
