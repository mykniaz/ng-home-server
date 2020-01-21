import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { PageMainComponent } from './page-main/page-main.component';
import { PageTodoComponent } from './page-todo/page-todo.component';
import { PageWeatherComponent } from './page-weather/page-weather.component';
import { PageMockTodoComponent } from './page-mock-todo/page-mock-todo.component';

const routes: Routes = [
  {
    path: '',
    component: PageMainComponent
  },
  {
    path: 'todo',
    component: PageTodoComponent
  },
  {
    path: 'weather',
    component: PageWeatherComponent
  },
  {
    path: 'mock-todo',
    component: PageMockTodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
