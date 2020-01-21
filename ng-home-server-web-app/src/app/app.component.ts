import { Component } from '@angular/core';
import MockTodoService from './services/mock-todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MockTodoService]
})

export class AppComponent {}
