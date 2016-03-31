import { Component, Inject, ApplicationRef } from 'angular2/core';
import { bindActionCreators } from 'redux';

import * as CounterActions from '../actions/counter';
import { RioContainer, RioCounter } from '../components';

@Component({
  selector: 'counter-page',
  directives: [ RioContainer, RioCounter ],
  template: `
    <rio-container [size]=2 [center]=true>
      <h2 class="center caps">Counter</h2>

      <rio-counter
        [counter]="counter"
        [increment]="increment"
        [decrement]="decrement">
      </rio-counter>
    </rio-container>
  `
})
export class RioCounterPage {
  private disconnect: Function;
  private unsubscribe: Function;

  constructor(
    @Inject('ngRedux') private ngRedux,
    private applicationRef: ApplicationRef) {}

  ngOnInit() {
    this.disconnect = this.ngRedux.connect(
      this.mapStateToThis,
      this.mapDispatchToThis)(this);

    this.unsubscribe = this.ngRedux.subscribe(() => {
      this.applicationRef.tick();
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
    this.disconnect();
  }

  mapStateToThis(state) {
    return {
      counter: state.counter.get('count')
    };
  }

  mapDispatchToThis(dispatch) {
    return bindActionCreators(CounterActions, dispatch);
  }
}
