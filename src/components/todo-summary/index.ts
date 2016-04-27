import { Component, Input } from 'angular2/core';

@Component({
  selector: 'rio-todo-summary',
  template: `     
  <div class="clear-fix">
    <div class="col col-3">
      Completed:
    </div>
    <div class="col col-3">
      {{completed}}
    </div>
    <div class="col col-3">
      Total:
    </div>
    <div class="col col-3">
      {{total}}
    </div>
  </div>
  `
})
export class RioTodoSummary {
  @Input() completed: number = 0;
  @Input() total: number = 0;
  constructor() { }
  
 };
