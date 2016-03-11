import { Component } from 'angular2/core';

@Component({
  selector: 'alert',
  inputs: ['status', 'isVisible'],
  template: `
    <div class="p2 bold {{componentColor[status] || componentColor['info']}}"
    [ngClass]="isVisible ? 'block' : 'hide'">
      <ng-content></ng-content>
    </div>
  `
})
export class Alert {

  private componentColor = {
    info: 'bg-blue white',
    warning: 'bg-yellow black',
    success: 'bg-green black',
    error: 'bg-red white'
  };

};
