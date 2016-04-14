import {
  Component,
  ViewEncapsulation,
  Inject,
  ApplicationRef
} from 'angular2/core';
import {Observable, Subscriber, Subscription} from 'rxjs';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { bindActionCreators } from 'redux';
import {AsyncPipe} from 'angular2/common';
import * as SessionActions from '../actions/session';
import {loginUser, logoutUser} from '../actions/session';

import { RioAboutPage } from './about-page';
import { RioCounterPage } from './counter-page';
import { RioTodoPage } from './todo-page';
import { is } from 'immutable';
import {
  RioButton,
  RioNavigator,
  RioNavigatorItem,
  RioLogo,
  RioLoginModal
} from '../components';

import {AppState} from './app-state';
import {NgRedux} from 'ng2-redux';

@Component({
  selector: 'rio-sample-app',
  pipes: [AsyncPipe],
  directives: [
    ROUTER_DIRECTIVES, RioNavigator, RioNavigatorItem,
    RioLoginModal, RioLogo, RioButton
  ],
  // Global styles imported in the app component.
  encapsulation: ViewEncapsulation.None,
  styles: [require('../styles/index.css')],
  template: `
    <div>
      <rio-login-modal
        (onSubmit)="login($event)"
        [hasError]="session.get('hasError', false)"
        [isPending]="session.get('isLoading', false)"
        *ngIf="!isLoggedIn"></rio-login-modal>
      <rio-navigator>
        <rio-navigator-item [mr]=true>
          <rio-logo></rio-logo>
        </rio-navigator-item>
        <rio-navigator-item *ngIf="isLoggedIn" [mr]=true>
          <a [routerLink]="['Counter']"
            class="text-decoration-none">Counter</a>
        </rio-navigator-item>
      <rio-navigator-item *ngIf="isLoggedIn" [mr]=true>
          <a [routerLink]="['Todo']"
            class="text-decoration-none">Todo</a>
        </rio-navigator-item>
        <rio-navigator-item *ngIf="isLoggedIn">
          <a [routerLink]="['About']"
            class="text-decoration-none">About Us</a>
        </rio-navigator-item>
        <div class="flex flex-auto"></div>
        <rio-navigator-item *ngIf="isLoggedIn" [mr]=true>
          {{
            session.getIn(['user', 'firstName'], '') + ' ' +
            session.getIn(['user', 'lastName'], '') }}
        </rio-navigator-item>
        <rio-navigator-item [hidden]="!isLoggedIn">
          <rio-button className="bg-red white" (click)="logout()" >
            Logout
          </rio-button>
        </rio-navigator-item>
      </rio-navigator>
      <main>
        <router-outlet *ngIf="isLoggedIn"></router-outlet>
      </main>
    </div>
  `
})
@RouteConfig([
  {
    path: '/counter',
    name: 'Counter',
    component: RioCounterPage,
    useAsDefault: true
  },
  {
    path: '/about',
    name: 'About',
    component: RioAboutPage
  },
  {
    path: '/todo',
    name: 'Todo',
    component: RioTodoPage
  }
])
export class RioSampleApp {
  private disconnect: Function;
  private unsubscribe: Function;
  private isLoggedIn: Boolean;
  private session: any;
  private selector: Subscription;
  
  
  constructor(
    private ngRedux: NgRedux<AppState>,
    private applicationRef: ApplicationRef) {
  }

  ngOnInit() {
    
    this.selector = this.ngRedux
      .select(state => state.session, is)
      .subscribe(n => { 
        this.session = n;
        this.isLoggedIn = n.get('token', false);
      });
  
    this.ngRedux.mapDispatchToTarget(this.mapDispatchToThis)(this);
    
  }

  ngOnDestroy() {
    this.selector.unsubscribe();
  }
  mapDispatchToThis(dispatch) {
    return {
      login: (credentials) => dispatch(loginUser(credentials)),
      logout: () => dispatch(logoutUser())
    };
  }
};
