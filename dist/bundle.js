webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(2);
	__webpack_require__(262);
	const platform_browser_dynamic_1 = __webpack_require__(274);
	const app_module_1 = __webpack_require__(296);
	const platform = platform_browser_dynamic_1.platformBrowserDynamic();
	platform.bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(3);
	__webpack_require__(248);
	__webpack_require__(260);


/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(263);
	__webpack_require__(272);


/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(276);
	const platform_browser_1 = __webpack_require__(294);
	const app_component_1 = __webpack_require__(297);
	const countdown_component_1 = __webpack_require__(298);
	let AppModule = class AppModule {
	};
	AppModule = __decorate([
	    core_1.NgModule({
	        imports: [platform_browser_1.BrowserModule],
	        declarations: [
	            app_component_1.AppComponent,
	            countdown_component_1.CountdownComponent
	        ],
	        bootstrap: [app_component_1.AppComponent]
	    }), 
	    __metadata('design:paramtypes', [])
	], AppModule);
	exports.AppModule = AppModule;


/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(276);
	let AppComponent = class AppComponent {
	};
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'moloch-app',
	        template: `
	  <div class="container-fluid">
	    <h1>The Final Countdown</h1>
	    <moloch-countdown></moloch-countdown>
	  </div>
	`
	    }), 
	    __metadata('design:paramtypes', [])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(276);
	let CountdownComponent = class CountdownComponent {
	    constructor() {
	        const endTime = new Date(2016, 9, 26).getTime();
	        const startTime = new Date(2016, 9, 1).getTime();
	        setInterval(() => {
	            const now = new Date().getTime();
	            const sBeforeLeave = (endTime - now) / 1000;
	            this.clock = Math.floor(sBeforeLeave);
	            this.percent = Math.floor((endTime - now) / (endTime - startTime) * 100);
	            this.days = Math.floor(sBeforeLeave / (24 * 3600));
	            this.hours = Math.floor((sBeforeLeave - this.days * 24 * 3600) / 3600);
	            this.minutes = Math.floor((sBeforeLeave - this.days * 24 * 3600 - this.hours * 3600) / 60);
	            this.seconds = Math.floor((sBeforeLeave - this.days * 24 * 3600 - this.hours * 3600 - this.minutes * 60));
	        }, 500);
	    }
	};
	CountdownComponent = __decorate([
	    core_1.Component({
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
	    }), 
	    __metadata('design:paramtypes', [])
	], CountdownComponent);
	exports.CountdownComponent = CountdownComponent;


/***/ }

});