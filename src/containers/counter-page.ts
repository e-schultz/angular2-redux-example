import {Component, View, Inject, OnDestroy, OnInit} from 'angular2/core';
import {bindActionCreators} from 'redux';

import * as CounterActions from '../actions/counter';
import {Counter} from '../components/counter';

@Component({
  selector: 'counter-page'
})
@View({
  directives: [Counter],
  template: `
  <counter [counter]="counter"
    [increment]="increment"
    [decrement]="decrement"
    [incrementIfOdd]="incrementIfOdd"
    [incrementAsync]="incrementAsync">
  </counter>
  `
})
export default class CounterPage {

  protected unsubscribe: Function;

  constructor( @Inject('ngRedux') private ngRedux) {

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
