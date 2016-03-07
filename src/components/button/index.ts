import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'btn',
  inputs: ['classStyles'],
  outputs: ['onClick'],
  styles: [require('./button.css')],
  template: `
    <button (click)="handleClick($event)"
      class="btn btn-primary {{classStyles}}">
      <ng-content></ng-content>
    </button>
  `
})
export class Button {
  onClick: EventEmitter<Event> = new EventEmitter();

  handleClick(event) {
    this.onClick.emit(event);
  }
};
