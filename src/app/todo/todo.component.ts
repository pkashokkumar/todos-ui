import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Todo} from '../list-todos/list-todos.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(
      private service: TodoDataService,
      private activatedRoute: ActivatedRoute,
      private router: Router) { }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.params.id, 10);
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id !== -1) {
      this.retreiveTodo(this.id);
    }
  }

  retreiveTodo(id: number) {
    this.service.retrieveTodo('user1', id).subscribe(
        response => {
          this.todo = response;
        }
    );
  }
  saveTodo() {
    if (this.id === -1) {
      this.service.addTodo('user1', this.todo).subscribe(
          response => {
            this.router.navigate(['todos']);
          }
      );
    } else {
      this.service.saveTodo('user1', this.todo).subscribe(
          response => {
            this.router.navigate(['todos']);
          }
      );
    }
  }
}
