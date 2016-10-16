import './polyfill.ts'
import './vendor.ts'

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';
import {enableProdMode} from "@angular/core";

declare const ENV: string; // webpack replaced

if (typeof ENV !== 'undefined' && ENV === 'production') {
  enableProdMode();
}

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
