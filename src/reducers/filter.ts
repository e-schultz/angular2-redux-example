import { FILTER_COMPLETED, FILTER_USER } from '../constants';
const INITIAL_STATE = {
  showCompleted: true,
  filterBy: null
}

export interface FilterState {
  showCompleted: boolean;
  filterBy: string;
}
export default function todos(state: FilterState = INITIAL_STATE, action) {
  switch (action.type) {
    case FILTER_COMPLETED:
      return Object.assign({}, state, { showCompleted: !state.showCompleted });
    case FILTER_USER: 
      return Object.assign({}, state, { filterBy: action.payload });   
    default:
      return state;
  }
};
