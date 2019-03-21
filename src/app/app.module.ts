import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // FormsModuleをインポート(heroes.component.htmlにてngModelを使用するため)

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // FomrsModuleをインポート
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
