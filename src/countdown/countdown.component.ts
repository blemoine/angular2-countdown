import {Component} from '@angular/core';
import * as moment from 'moment';
import {CountdownService} from "./countdown.service";

import * as $ from 'jquery';
(window as any).$ = (window as any).jQuery = $;
import 'flipclock/compiled/flipclock.css';
import 'flipclock/compiled/flipclock.js';

const endTime = moment('2016-10-26T17:00:00+02:00');
const startTime = moment('2016-10-19T09:00:00+02:00');

@Component({
  selector: 'moloch-countdown',
  template: `
  <moloch-progressbar
    [text]="clock + ' seconds'"
    [percent]="percent"
  ></moloch-progressbar>
  
  <div>   
    <div class="my-clock"></div>
    
  </div>
  `,
  providers: [CountdownService]
})
export class CountdownComponent {
  public clock: number;
  public percent: number;
  public duration: string;

  constructor(countdownService:CountdownService) {


    countdownService.getSecondsBetween(endTime).subscribe((msUntilEnds:number) => {
      this.clock = Math.floor(msUntilEnds / 1000);

      this.percent = this.clock / endTime.diff(startTime, 'seconds') * 100;
    })
  }

  ngAfterViewInit() {
    ($('.my-clock') as any).FlipClock(endTime.diff(moment()) / 1000, {
      clockFace: 'DailyCounter',
      countdown: true
    });
  }
}
