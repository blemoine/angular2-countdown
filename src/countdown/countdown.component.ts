import {Component} from '@angular/core';

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
    const endTime = new Date(2016, 9, 26).getTime();
    const startTime = new Date(2016, 9, 1).getTime();
    setInterval(() => {
      const now = new Date().getTime();
      const sBeforeLeave = (endTime - now) / 1000;

      this.clock = Math.floor(sBeforeLeave);
      this.percent = Math.floor((endTime - now) / (endTime - startTime) * 100);


      this.days = Math.floor(sBeforeLeave / (24 * 3600));
      this.hours = Math.floor( (sBeforeLeave - this.days * 24 * 3600) / 3600);
      this.minutes = Math.floor( (sBeforeLeave - this.days * 24 * 3600 - this.hours * 3600) / 60);
      this.seconds = Math.floor( (sBeforeLeave - this.days * 24 * 3600 - this.hours * 3600 - this.minutes * 60));
    }, 500)

  }
}
