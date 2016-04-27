import { Component, Inject, ApplicationRef } from 'angular2/core';
import { bindActionCreators } from 'redux';
import { AsyncPipe } from 'angular2/common';
import * as CounterActions from '../actions/counter';
import { RioContainer, RioCounter } from '../components';
import {NgRedux} from 'ng2-redux';

declare interface IAppState {
  counter: Map<string, number>;
  session: Map<string, any>;
}


@Component({
  selector: 'counter-page',
  directives: [RioContainer, RioCounter],
  pipes: [AsyncPipe],
  template: `
    <rio-container [size]=2 [center]=true>
      <h2 id="qa-counter-heading"
        class="center caps">
        Counter
      </h2>

      <rio-counter
        [counter]="counter$ | async"
        [increment]="increment"
        [decrement]="decrement">
      </rio-counter>
    </rio-container>
  `
})
export class RioCounterPage {
  private disconnect: Function;
  private unsubscribe: Function;
  private counter$: any;
  constructor(
    private ngRedux: NgRedux<IAppState>
    ) {}

  ngOnInit() {
    this.counter$ = this.ngRedux
      .select(n => n.counter.get('count'));
      
    this.ngRedux.mapDispatchToTarget(CounterActions)(this);
    
  }
  
  ngOnDestroy() {
    
  }

  
}
