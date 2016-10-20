import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {CountdownService} from "./countdown.service";

@Component({
  selector: 'moloch-countdown',
  template: `
  <moloch-progressbar
    [text]="clock + ' seconds'"
    [percent]="percent"
  ></moloch-progressbar>
  
  <div class="flip-clock-top-wrapper">
    <moloch-flip-clock [untilInSec]="untilInSec"></moloch-flip-clock>  
  </div>
  `,
  providers: [CountdownService],
  styles: [
    `.flip-clock-top-wrapper { 
           background-color:rgba(255,255,255,0.5);
           padding:10px;
           text-align:center; 
       }`,
    `moloch-flip-clock {
         margin-left:auto;
         margin-right:auto;
         width:auto;
         display:inline-block;
      }`
  ]
})
export class CountdownComponent implements OnInit {
  @Input() startTime: moment.Moment;
  @Input() endTime: moment.Moment;

  public clock: number;
  public percent: number;
  public duration: string;

  public untilInSec: number;

  constructor(private countdownService: CountdownService) {
  }

  ngOnInit(): void {
    this.countdownService.getSecondsBetween(this.endTime).subscribe((msUntilEnds: number) => {
      this.clock = Math.floor(msUntilEnds / 1000);

      this.percent = this.clock / this.endTime.diff(this.startTime, 'seconds') * 100;

      this.untilInSec = this.endTime.diff(moment()) / 1000
    })

  }
}
