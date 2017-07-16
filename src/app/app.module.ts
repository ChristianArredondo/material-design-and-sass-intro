import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdGridListModule,
  MdListModule } from '@angular/material';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule,
    MdListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
