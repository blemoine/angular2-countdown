import {Component} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'moloch-countdown',
  template: `
  <div class="progress">
    <div class="progress-bar" [style.width.%]="percent">
      <span>{{clock}} seconds</span>
    </div>    
  </div>
  <div>
    <span>{{days}} Days</span>
    <span>{{hours}} Hours</span>
    <span>{{minutes}} Minutes</span>
    <span>{{seconds}} Seconds</span>
  </div>
  `
})
export class CountdownComponent {
  public clock: number;
  public percent: number;
  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;

  constructor() {
    const endTime = moment('2016-10-26T17:00:00+02:00');
    const startTime = moment('2016-10-01T09:00:00+02:00');

    setInterval(() => {
      const now = moment();

      this.clock = endTime.diff(now, 'seconds');
      this.percent = Math.floor(this.clock / endTime.diff(startTime, 'seconds') * 100);

      this.days = Math.floor(endTime.diff(now, 'days'));
      this.hours = Math.floor(endTime.diff(now, 'hours') - this.days * 24);
      this.minutes = Math.floor(endTime.diff(now, 'minutes') - this.days * 24 * 60 - this.hours * 60);
      this.seconds = Math.floor(endTime.diff(now, 'seconds') - this.days * 24 * 3600 - this.hours * 3600 - this.minutes * 60);
    }, 500);
  }
}
