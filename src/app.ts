import {LocationStrategy, PathLocationStrategy} from 'angular2/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide, enableProdMode, ExceptionHandler} from 'angular2/core';
import {ThoughtSpotComponent} from './app/thought-spot.component';
import {ThoughtSpotRouter} from './app/thought-spot.routes'
import {JSONP_PROVIDERS} from '@angular/http';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(ThoughtSpotComponent, [
  ThoughtSpotRouter,
  JSONP_PROVIDERS,
  HTTP_PROVIDERS
]).then((appRef) => {
})
.catch(err => console.error(err));
