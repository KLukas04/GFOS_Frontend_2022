import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoteData } from 'ngx-remotedata';
import { Observable } from 'rxjs';
import { Todo } from './models/todo.model';

import * as fromActions from './store/employer.actions';
import * as fromReducer from './store/employer.reducer';
import * as fromSelectors from './store/employer.selectors';
@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployerComponent implements OnInit {
  public todos$: Observable<RemoteData<Todo[], HttpErrorResponse>>;

  constructor(private store: Store<fromReducer.EmployerState>) {
    this.todos$ = this.store.select(fromSelectors.selectTodos);
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadTodos());
  }
}
