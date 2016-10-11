import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CountdownComponent} from "./countdown/countdown.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    CountdownComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
