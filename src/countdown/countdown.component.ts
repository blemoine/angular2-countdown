import {Component} from '@angular/core';
import * as moment from 'moment';
import 'moment-duration-format';
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
    {{duration}}
   
  </div>
  `,
  providers: [CountdownService]
})
export class CountdownComponent {
  public clock: number;
  public percent: number;
  public duration: string;

  constructor(countdownService:CountdownService) {
    const endTime = moment('2016-10-26T17:00:00+02:00');
    const startTime = moment('2016-10-01T09:00:00+02:00');

    countdownService.getSecondsBetween(endTime).subscribe((msUntilEnds:number) => {
      this.clock = Math.floor(msUntilEnds / 1000);

      this.percent = Math.floor(this.clock / endTime.diff(startTime, 'seconds') * 100);



      const duration = moment.duration(msUntilEnds) as any

      this.duration = duration.format('d [Days] h [Hours] m [Minutes] s [Seconds]');
    })
  }
}
