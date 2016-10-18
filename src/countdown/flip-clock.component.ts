import * as $ from 'jquery';

import 'flipclock/compiled/flipclock.css';
import 'imports?jQuery=jquery!flipclock/compiled/flipclock.js';
import './flipclock'
import {Component, AfterViewInit, Input, OnChanges, SimpleChanges, ElementRef} from "@angular/core";

@Component({
  selector: 'moloch-flip-clock',
  template: `
  <div class="my-clock"></div>
  `
})
export class FlipClockComponent implements AfterViewInit, OnChanges {

  @Input() untilInSec: number;

  private clock: any;

  constructor(private el: ElementRef) {

  }

  ngAfterViewInit(): void {
    this.clock = $(this.el.nativeElement).FlipClock(this.untilInSec, {
      clockFace: 'DailyCounter',
      countdown: true
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.clock) {
      this.clock.setTime(this.untilInSec)
    }
  }

}