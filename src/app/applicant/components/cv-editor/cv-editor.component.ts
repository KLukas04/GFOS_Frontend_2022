import { Component, Inject, Injector, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromReducer from '../../store/applicant.reducer';
import * as fromActions from '../../store/applicant.actions';



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


  constructor(
    private store: Store<fromReducer.ApplicantState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadLebenslaufStationen());
  }
}
