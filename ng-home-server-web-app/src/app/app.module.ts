import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PostFormComponent } from './post-form/post-form.component';

// Directives
import { StyleDirective } from './directives/style.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    MainPageComponent,
    PostFormComponent,
    StyleDirective,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
