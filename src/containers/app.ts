import { Component, ViewEncapsulation, Inject } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { bindActionCreators } from 'redux';

import * as SessionActions from '../actions/session';
import {loginUser, logoutUser} from '../actions/session';

import AboutPage from '../containers/about-page';
import CounterPage from '../containers/counter-page';

import {
  Button,
  Navigator,
  NavigatorItem,
  Logo,
  LoginModal
} from '../components';

@Component({
  selector: 'root',
  directives: [
    ROUTER_DIRECTIVES, Navigator, NavigatorItem,
    LoginModal, Logo, Button
  ],
  encapsulation: ViewEncapsulation.None,
  styles: [require('../styles/index.css')],
  template: `
    <div>
      <login-modal
        (onSubmit)="login($event)"
        [hasError]="session.get('hasError', false)"
        [isPending]="session.get('isLoading', false)"
        *ngIf="!isLoggedIn"></login-modal>
      <navigator>
        <div class="flex flex-auto">
          <navigator-item class="p1">
            <logo></logo>
          </navigator-item>
          <navigator-item *ngIf="isLoggedIn" class="p1">
            <a [routerLink]="['Counter']"
              class="text-decoration-none">Counter</a>
          </navigator-item>
          <navigator-item *ngIf="isLoggedIn" class="p1">
            <a [routerLink]="['About']"
              class="text-decoration-none">About Us</a>
          </navigator-item>
        </div>
        <div class="flex flex-end">
          <navigator-item *ngIf="isLoggedIn" class="p1 bold">
            {{
              session.getIn(['user', 'firstName'], '') + ' ' +
              session.getIn(['user', 'lastName'], '') }}
          </navigator-item>
          <navigator-item *ngIf="isLoggedIn">
            <btn (click)="logout()" class="bg-red white">
              Logout
            </btn>
          </navigator-item>
        </div>
      </navigator>
      <div class="mt3 p1">
        <router-outlet *ngIf="isLoggedIn"></router-outlet>
      </div>
    </div>
  `
})
@RouteConfig([
  {
    path: '/counter',
    name: 'Counter',
    component: CounterPage,
    useAsDefault: true
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  }
])
export default class App {
  private unsubscribe: Function;
  private isLoggedIn: Boolean;
  private session: any;

  constructor(@Inject('ngRedux') private ngRedux) {
  }

  ngOnInit() {
    this.unsubscribe = this.ngRedux.connect(
      this.mapStateToThis,
      this.mapDispatchToThis)(this);
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return {
      session: state.session,
      isLoggedIn: state.session.get('token', false)
    };
  }

  mapDispatchToThis(dispatch) {
    return {
      login: (credentials) => dispatch(loginUser(credentials)),
      logout: () => dispatch(logoutUser())
    };
  }
};
