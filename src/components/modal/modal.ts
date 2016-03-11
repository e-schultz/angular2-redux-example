import { Component, Input } from 'angular2/core';

@Component({
  selector: 'modal',
  inputs: ['isVisible'],
  styles: [require('./modal.css')],
  template: `
    <div class="fixed top-0 bottom-0 left-0 right-0 p1 modal-mask"
    [ngClass]="isVisible ? 'block' : 'hide'">
      <ng-content></ng-content>
    </div>
  `
})
export class Modal {

};
