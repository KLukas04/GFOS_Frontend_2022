import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RemoteData } from 'ngx-remotedata';
import { Observable } from 'rxjs';
import { Application } from './models/application.model';
import { Employer } from './models/employer.model';
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
  public name$: Observable<RemoteData<Employer, HttpErrorResponse>>;
  public applications$: Observable<
    RemoteData<Application[], HttpErrorResponse>
  >;

  public todoControl: FormControl = new FormControl(null);

  constructor(private store: Store<fromReducer.EmployerState>) {
    this.todos$ = this.store.select(fromSelectors.selectTodos);
    this.name$ = this.store.select(fromSelectors.selectOwnAccount);
    this.applications$ = this.store.select(fromSelectors.selectApplications);
  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadTodos());
    this.store.dispatch(fromActions.loadSelf());
    this.store.dispatch(fromActions.loadApplications());
  }

  public saveTodo(): void {
    this.store.dispatch(
      fromActions.newTodoInserted({ todo: this.todoControl.value })
    );
  }

  public addTodo(): void {
    this.store.dispatch(fromActions.saveNewTodo());
    this.todoControl.reset();
  }

  public deleteTodo(id: number): void {
    this.store.dispatch(fromActions.deleteTodo({ id: id }));
  }
}
