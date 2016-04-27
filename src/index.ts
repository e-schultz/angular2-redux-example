import { enableProdMode,
  provide,
  Injectable,
  ComponentRef} from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS, APP_BASE_HREF } from 'angular2/router';
import configureStore from './store/configure-store';
import { RioSampleApp } from './containers/sample-app';
import { provider } from 'ng2-redux';

const store = configureStore({});
declare let __PRODUCTION__: any;

if (__PRODUCTION__) {
  enableProdMode();
}

bootstrap(RioSampleApp, [
  provider(store),
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, { useValue: '/' })
]);
