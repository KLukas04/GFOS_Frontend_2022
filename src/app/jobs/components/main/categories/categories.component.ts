import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoteData } from 'ngx-remotedata';
import { Observable } from 'rxjs';
import { Fachgebiet } from 'src/app/jobs/models/fachgebiet.model';

import * as fromReducer from '../../../store/jobs.reducer';
import * as fromSelectors from '../../../store/jobs.selectors';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public fachgebiete$: Observable<RemoteData<Fachgebiet[], HttpErrorResponse>>;

  constructor(private store: Store<fromReducer.JobsState>) {
    this.fachgebiete$ = this.store.select(fromSelectors.selectAllFachgebiete);
  }

  ngOnInit(): void {}
}
