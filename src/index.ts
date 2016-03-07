import {Component, View, Inject, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap';
import configureStore from './store/configure-store';
import App from './containers/app';

// Global styles
import './styles/index.css';
import {ROUTER_PROVIDERS} from 'angular2/router';

const provider = require('ng2-redux').provider;
const store = configureStore();
declare let __PRODUCTION__: any;

if (__PRODUCTION__) {
  enableProdMode();
}

bootstrap(App, [ provider(store), ROUTER_PROVIDERS ]);
