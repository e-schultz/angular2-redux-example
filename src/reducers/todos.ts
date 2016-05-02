import { ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED } from '../constants'

const INITIAL_STATE = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0,
    owner: 'admin',
  }, {
    text: 'Buy The Milk',
    completed: false,
    id: 1,
    owner: 'guest'
  },
  {
    text: 'Use ng2-redux',
    completed: true,
    id: 3,
    owner: 'user'
  },
  {
    text: 'Populate Mock Data',
    completed: false,
    id: 4,
    owner: 'user'
  }
];
export interface Todo {
  id: number;
  completed: boolean;
  text: string;

}
export interface TodoState extends Array<Todo> { };

const getNextId = (todos): number => todos.reduce(
  (maxId, todo) => Math.max(todo.id, maxId), -1) + 1;

export default function todos(state: TodoState = INITIAL_STATE,
  action): TodoState {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: getNextId(state),
          completed: false,
          text: action.text
        }];

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      );

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { text: action.text }) :
          todo
      );
    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { completed: !todo.completed }) :
          todo
      );
    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => Object.assign({}, todo, {
        completed: !areAllMarked
      }));

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);

    default:
      return state;
  }
};
