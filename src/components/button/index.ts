import { Component, EventEmitter, Input, Output } from 'angular2/core';

@Component({
  selector: 'rio-button',
  styles: [require('./button.css')],
  template: `
    <button
      (click)="handleClick($event)"
      type="{{type || 'button'}}"
      class="btn btn-primary {{classStyles}}">

      <ng-content></ng-content>
    </button>
  `
})
export class RioButton {
  @Input() classStyles: string;
  @Input() type: string;
  @Output() onClick: EventEmitter<Event> = new EventEmitter();

  handleClick(event) {
    this.onClick.emit(event);
  }
};
