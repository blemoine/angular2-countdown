import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'moloch-youtube',
  template: `
  <div style="position: fixed; z-index: -99; width: 100%; height: 100%">
    <iframe width="100%" height="100%" [src]="url" frameborder="0" allowfullscreen></iframe>
  </div>
  `
})
export class YoutubeComponent {

  @Input() idVideo: string;
  @Input() autoplay: boolean;
  @Input() startInSec: number;

  public url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnChanges() {
    const autoplay = this.autoplay ? "rel=0&autoplay=1" : '';
    const start = (!!this.startInSec) ? `start=${this.startInSec}` : '';

    const params = [autoplay, start].join('&');

    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.idVideo}?${params}`);
  }
}

