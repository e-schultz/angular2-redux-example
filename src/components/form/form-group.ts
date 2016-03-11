import { Component } from 'angular2/core';

@Component({
  selector: 'form-group',
  template: `
    <div class="p2">
      <ng-content></ng-content>
    </div>
  `
})
export class FormGroup {
};
