import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { PageMainComponent } from './page-main/page-main.component';
import { PageTodoComponent } from './page-todo/page-todo.component';
import { PageWeatherComponent } from './page-weather/page-weather.component';
import { PageMockTodoComponent } from './page-mock-todo/page-mock-todo.component';
import { PageErrorComponent } from './page-error/page-error.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PageMainComponent
  },
  {
    path: 'todo',
    component: PageTodoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'weather',
    component: PageWeatherComponent
  },
  {
    path: 'mock-todo',
    component: PageMockTodoComponent
  },
  {
    path: '**',
    component: PageErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
