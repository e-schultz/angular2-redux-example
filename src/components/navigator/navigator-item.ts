import { Component } from 'angular2/core';

@Component({
  selector: 'navigator-item',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `
})
export class NavigatorItem {
};
