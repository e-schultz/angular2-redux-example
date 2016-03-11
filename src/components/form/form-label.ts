import { Component } from 'angular2/core';

@Component({
  selector: 'form-label',
  template: `
    <label>
      <ng-content></ng-content>
    </label>
  `
})
export class FormLabel {
};
