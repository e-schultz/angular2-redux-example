import { Component } from 'angular2/core';

@Component({
  selector: 'rio-navigator-item',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `
})
export class RioNavigatorItem {};
