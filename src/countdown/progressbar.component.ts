import {Component, Input} from "@angular/core";


@Component({
  selector: 'moloch-progressbar',
  template: `
  <div class="progress">
    <div class="progress-bar" [style.width.%]="percent">
      <span>{{text}}</span>
    </div>    
  </div>
  `
})
export class ProgressbarComponent {
  @Input() percent:number;
  @Input() text:string;
}
