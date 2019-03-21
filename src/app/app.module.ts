import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // FormsModuleをインポート(heroes.component.htmlにてngModelを使用するため)

import { AppComponent } from './app.component';
import { HeroesComponent } fr;
import { HeroDetailComponent } from './hero-detail/hero-detail.component'om './heroes/heroes.component';

@NgModule({
  declarations: [
    App,
    HeroDetailComponentComponent,
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
