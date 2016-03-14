import { Component } from 'angular2/core';

@Component({
  selector: 'alert',
  inputs: ['status'],
  template: `
    <div class="p2 bold"
      [ngClass]="componentColor[status] || componentColor['info']">
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
