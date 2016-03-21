import { Component, Input } from 'angular2/core';

@Component({
  selector: 'rio-alert',
  template: `
    <div class="p2 bold"
      [ngClass]="componentColor[status] || componentColor['info']">
      <ng-content></ng-content>
    </div>
  `
})
export class RioAlert {
  @Input() status;

  private componentColor = {
    info: 'bg-blue white',
    warning: 'bg-yellow black',
    success: 'bg-green black',
    error: 'bg-red white'
  };
};
