import { Component, Inject, ApplicationRef, ComponentRef} from 'angular2/core';
import { AsyncPipe } from 'angular2/common';
import { Observable } from 'rxjs';
import { bindActionCreators } from 'redux';

import { RioContainer,
  RioTodoList,
  RioTodoSummary,
  RioButton } from '../components';
import { NgRedux } from 'ng2-redux';
import { addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  completeAll,
  clearCompleted } from '../actions/todo';
import { filterCompleted } from '../actions/filters';

import { AppState, TodoState, Todo, FilterState } from './app-state';
const TEMPLATE = require('./todo-page.html');


@Component({
  selector: 'todo-page',
  directives: [RioContainer, RioTodoList, RioTodoSummary, RioButton],
  pipes: [AsyncPipe],
  template: TEMPLATE
})
export class RioTodoPage {

  protected total$: Observable<number>;
  protected completed$: Observable<number>;
  protected todos$: Observable<TodoState>;
  protected hideCompleted$: Observable<boolean>;
  protected filteredTodos$: Observable<TodoState>;
  protected completedTodos$: Observable<TodoState>;
  protected incompleteTodos$: Observable<TodoState>;
  
  
  public addTodo: (text: string) => void;

  constructor(
    private ngRedux: NgRedux<AppState>
  ) { }

  ngOnInit() {
    
    let filterTodos = (val: boolean) => (item: Todo) => item.completed === val;

    this.hideCompleted$ = this.ngRedux.select(state => {
      
      return !state.filter.showCompleted;
    });

    this.todos$ = this.ngRedux
      .select(n => n.todos);

    this.completedTodos$ = this.todos$
      .map(todos => todos.filter(filterTodos(true)));

    this.incompleteTodos$ = this.todos$
      .map(todos => todos.filter(filterTodos(false)));

    this.total$ = this.todos$.pluck('length');
    this.completed$ = this.completedTodos$.pluck('length');

    this.filteredTodos$ = this.todos$
      .combineLatest(this.hideCompleted$, (todos, filter) => {
        return todos.filter(n => filterTodos(false)(n) || filter === false);
      });

    this.ngRedux.mapDispatchToTarget({
      completeTodo,
      editTodo,
      deleteTodo,
      filterCompleted,
      completeAll,
      clearCompleted,
      addTodo
    })(this);

  }

  onAddTodo(todoValue) {
    this.addTodo(todoValue);
  }

  ngOnDestroy() {

  }


}
