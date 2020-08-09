import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  retrieveAllTodos(username: string) {
    return this.httpClient.get<Todo[]>(`http://localhost:5555/users/${username}/todos`);
  }

  retrieveTodo(username: string, id: number) {
    return this.httpClient.get<Todo>(`http://localhost:5555/users/${username}/todos/${id}`);
  }

  deleteTodo(username: string, id: number) {
    return this.httpClient.delete(`http://localhost:5555/users/${username}/todos/${id}`);
  }

  saveTodo(username: string, todo: Todo) {
    return this.httpClient.put(`http://localhost:5555/users/${username}/todos/${todo.id}`, todo);
  }

  addTodo(username: string, todo: Todo) {
    return this.httpClient.post(`http://localhost:5555/users/${username}/todos`, todo);
  }
}
