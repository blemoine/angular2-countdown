import {Component} from '@angular/core';
import * as moment from 'moment';
import {CountdownService} from "./countdown.service";

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
  `,
  providers: [CountdownService]
})
export class CountdownComponent {
  public clock: number;
  public percent: number;
  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;

  constructor(countdownService:CountdownService) {
    const endTime = moment('2016-10-26T17:00:00+02:00');
    const startTime = moment('2016-10-01T09:00:00+02:00');

    countdownService.getSecondsBetween(endTime).subscribe((msUntilEnds:number) => {
      this.clock = Math.floor(msUntilEnds / 1000);

      this.percent = Math.floor(this.clock / endTime.diff(startTime, 'seconds') * 100);

      this.days = Math.floor(this.clock / (24 * 3600));
      this.hours = Math.floor( (this.clock - this.days * 24 * 3600)/3600 );
      this.minutes = Math.floor( (this.clock - this.days * 24 * 3600 - this.hours * 3600) / 60 );
      this.seconds = Math.floor((this.clock - this.days * 24 * 3600 - this.hours * 3600 - this.minutes * 60));
    })
  }
}
