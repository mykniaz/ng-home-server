import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import MockTodoService, {Todo} from './services/mock-todo.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
  providers: [MockTodoService]
})

export class AppComponent implements OnInit {
  todoArr: Array<Todo> = [];
  title = '';

  isLoading = false;

  constructor(private mockTodoService: MockTodoService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.isLoading = true;

    this.mockTodoService.getAllTodo()
      .subscribe((data: Array<Todo>) => {
        this.todoArr = data;
        this.isLoading = false;
      });
  }

  remove(id) {
    this.isLoading = true;

    this.mockTodoService.removeTodo(id)
      .subscribe(() => {
        this.todoArr = this.todoArr.filter((todoItem: Todo) => todoItem.id !== id);
        this.isLoading = false;
      });
  }

  submitForm() {
    this.isLoading = true;
    const newTodo = {
      title: this.title,
      completed: false,
    };

    this.mockTodoService.addTodo(newTodo)
      .subscribe((data: Todo) => {
        this.title = '';
        this.todoArr = [data, ...this.todoArr];
        this.isLoading = false;
      });
  }

  finish(id: number) {
    this.isLoading = true;

    this.mockTodoService.completeTodo(id)
      .subscribe((updatedTodo: Todo) => {
        const todoIndex = this.todoArr.findIndex((todoItem) => todoItem.id === id) ;
        this.todoArr = [
          ...this.todoArr.splice(0, todoIndex),
          {
            ...this.todoArr[todoIndex],
            ...updatedTodo,
          },
          ...this.todoArr.splice(todoIndex + 1),
        ];
        this.isLoading = false;
      });
  }
}
