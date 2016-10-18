import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CountdownComponent} from "./countdown/countdown.component";
import {YoutubeComponent} from "./youtube/youtube.component";
import {ProgressbarComponent} from "./countdown/progressbar.component";
import {FlipClockComponent} from "./countdown/flip-clock.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    CountdownComponent,
    YoutubeComponent,
    ProgressbarComponent,
    FlipClockComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
