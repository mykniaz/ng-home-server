import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { PostFormComponent } from './post-form/post-form.component';
import { CommuterComponent } from './ui/commuter/commuter.component';
import { HttpClientModule } from '@angular/common/http';
import { PageMockTodoComponent } from './page-mock-todo/page-mock-todo.component';
import { PageTodoComponent } from './page-todo/page-todo.component';
import { PageMainComponent } from './page-main/page-main.component';
import { PageWeatherComponent } from './page-weather/page-weather.component';

import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { ModalComponent } from './ui/modal/modal.component';
import {RefDirective} from './ref.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    PostFormComponent,
    CommuterComponent,
    PageMockTodoComponent,
    PageTodoComponent,
    PageMainComponent,
    PageWeatherComponent,
    LineChartComponent,
    PageErrorComponent,
    ModalComponent,
    RefDirective,
  ],
  imports: [
    FormsModule,
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    ModalComponent,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
