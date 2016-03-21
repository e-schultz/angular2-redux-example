import { Component, Input } from 'angular2/core';
import { RioButton } from '../button';

@Component({
  selector: 'rio-counter',
  template: `
    <div class="flex">
      <div class="flex-auto flex-center center">
        <rio-button
          classStyles="square-button bg-black"
          (onClick)="decrement()">
          -
        </rio-button>
      </div>
      <div class="flex-auto flex-center center h1">{{ counter }}</div>
      <div class="flex-auto flex-center center">
        <rio-button classStyles="square-button"
          (onClick)="increment()">
          +
        </rio-button>
      </div>
    </div>
  `,
  directives: [RioButton]
})
export class RioCounter {
  @Input() counter: number;
  @Input() increment: () => void;
  @Input() decrement: () => void;
};
