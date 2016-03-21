import { Component } from 'angular2/core';

@Component({
  selector: 'rio-navigator',
  template: `
    <nav class="flex flex-stretch flex-center p1 bg-white gray border-bottom\
                fixed top-0 left-0 right-0 z3">
      <ng-content></ng-content>
    </nav>
  `
})
export class RioNavigator {};
