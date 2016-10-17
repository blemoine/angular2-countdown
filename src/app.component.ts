import {Component} from '@angular/core';
@Component({
  selector: 'moloch-app',
  template: `
  <moloch-youtube idVideo="9jK-NcRmVcw" autoplay="true" startInSec="117"></moloch-youtube>
  <div class="container-fluid">
    <h1>The Final Countdown</h1>
    <moloch-countdown></moloch-countdown>
  </div>
`
})
export class AppComponent {
}
