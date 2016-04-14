import { Component, Input } from 'angular2/core';

@Component({
  selector: 'rio-label',
  template: `
    <label [id]="qaid">
      <ng-content></ng-content>
    </label>
  `
})
export class RioLabel {
  @Input() qaid: string;
};
