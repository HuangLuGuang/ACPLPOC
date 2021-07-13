import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo01Component } from './demo01/demo01.component';
import { Demo03Component } from './demo03/demo03.component';
import { Demo02Component } from './demo02/demo02.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo01Component,
    Demo03Component,
    Demo02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
