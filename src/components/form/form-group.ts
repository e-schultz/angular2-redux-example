import { Component } from 'angular2/core';

@Component({
  selector: 'rio-form-group',
  template: `
    <div class="p2">
      <ng-content></ng-content>
    </div>
  `
})
export class RioFormGroup {};
