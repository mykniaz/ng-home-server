import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  todoArr: Array<Todo> = [];
  title = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log(this.http);

    this.http.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos')
      .subscribe((data: Array<Todo>) => {
        this.todoArr = [...data];
      });
  }

  finish(id) {
    console.log(id);
  }

  remove(id) {
    console.log(id);
  }

  submitForm() {
    const newTodo = {
      title: this.title,
      completed: false,
    };

    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe((data: Todo) => {
        this.title = '';
        this.todoArr = [data, ...this.todoArr];
      });
  }
}
