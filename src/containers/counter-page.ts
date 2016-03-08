import { Component, Inject } from 'angular2/core';
import { bindActionCreators } from 'redux';

import * as CounterActions from '../actions/counter';
import { Counter } from '../components';

@Component({
  selector: 'counter-page',
  directives: [Counter],
  template: `
    <div class="col col-4">
      <h1 class="center">Counter</h1>
      <counter [counter]="counter"
        [increment]="increment"
        [decrement]="decrement">
      </counter>
    </div>
  `
})
export default class CounterPage {

  private unsubscribe: Function;

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
      counter: state.counter
    };
  }

  mapDispatchToThis(dispatch) {
    return bindActionCreators(CounterActions, dispatch);
  }
}
