import {Component, View, Inject, OnDestroy, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import AboutPage from '../containers/about-page';
import CounterPage from '../containers/counter-page';

@Component({
  selector: 'root'
})
@View({
  directives: [ROUTER_DIRECTIVES],
  template: `
  <nav>
    <a [routerLink]="['Counter']">Counter</a>
    <a [routerLink]="['About']">About</a>
  </nav>
  <router-outlet></router-outlet>
  `
})
@RouteConfig([
  { path: '/', name: 'Counter', component: CounterPage, useAsDefault: true },
  { path: 'about', name: 'About', component: AboutPage }
])
export default class App {

}
