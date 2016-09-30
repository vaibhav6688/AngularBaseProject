import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { routes } from './app.route';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HomeComponent, AboutComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [{provide: APP_BASE_HREF, useValue : '/'}]
})
export class AppModule { }