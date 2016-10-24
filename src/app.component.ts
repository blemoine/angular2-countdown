import {Component} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'moloch-app',
  template: `
  <moloch-youtube idVideo="9jK-NcRmVcw" autoplay="true" startInSec="117"></moloch-youtube>
  <div class="container-fluid">
    <h1>The Final Countdown</h1>
    <moloch-countdown
      [startTime]="startTime"
      [endTime]="endTime"
    ></moloch-countdown>
  </div>
`
})
export class AppComponent {
  public endTime = moment('2016-10-26T17:00:00+02:00');
  public startTime = moment('2016-10-24T17:00:00+02:00');
}
