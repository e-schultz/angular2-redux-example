import { Component } from 'angular2/core';

@Component({
  selector: 'form-error',
  inputs: ['isVisible'],
  template: `
    <div class="bold black" [ngClass]="isVisible ? 'block' : 'hide'">
      <ng-content></ng-content>
    </div>
  `
})
export class FormError {
};
