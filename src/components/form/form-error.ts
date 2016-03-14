import { Component } from 'angular2/core';

@Component({
  selector: 'form-error',
  template: `
    <div class="bold black">
      <ng-content></ng-content>
    </div>
  `
})
export class FormError {
};
