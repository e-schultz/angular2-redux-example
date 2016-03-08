import { Component } from 'angular2/core';
import { Button } from '../button';

@Component({
  selector: 'counter',
  inputs: [
    'counter',
    'increment',
    'decrement'
  ],
  template: `
    <div class="flex">
      <div class="flex-auto flex-center center">
        <btn classStyles="square-button bg-black" (onClick)="decrement()">
          -
        </btn>
      </div>
      <div class="flex-auto flex-center center h1">{{ counter }}</div>
      <div class="flex-auto flex-center center">
        <btn classStyles="square-button" (onClick)="increment()">
          +
        </btn>
      </div>
    </div>
  `,
  directives: [Button]
})
export class Counter {
};
