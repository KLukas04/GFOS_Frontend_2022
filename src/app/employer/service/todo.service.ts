import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseURL = environment.baseURL;

  constructor(private http: HttpClient) {}

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseURL}/todo`).pipe(take(1));
  }

  public addTodo(todo: string): Observable<string> {
    return this.http
      .post<any>(`${this.baseURL}/todo`, {
        title: todo,
      })
      .pipe(take(1));
  }

  public deleteTodo(id: number): Observable<string> {
    return this.http.delete<any>(`${this.baseURL}/todo/${id}`).pipe(take(1));
  }
}
