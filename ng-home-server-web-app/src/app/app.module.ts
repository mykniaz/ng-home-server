import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostFormComponent } from './post-form/post-form.component';
import { CommuterComponent } from './ui/commuter/commuter.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    MainPageComponent,
    PostFormComponent,
    CommuterComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
