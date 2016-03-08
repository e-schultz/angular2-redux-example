import {mockStore} from '../tests.helpers';
import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../constants';
import * as CounterActions from './counter';

describe('counter action creators', () => {

  it('increment should create INCREMENT_COUNTER action', () => {
    chai.expect(CounterActions.increment())
      .to.deep.equal({
        type: INCREMENT_COUNTER
      });
  });

  it('decrement should create DECREMENT_COUNTER action', () => {
    chai.expect(CounterActions.decrement())
      .to.deep.equal({
        type: DECREMENT_COUNTER
      });
  });

});
