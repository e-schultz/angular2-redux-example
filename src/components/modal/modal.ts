import { Component } from 'angular2/core';

@Component({
  selector: 'rio-modal',
  styles: [require('./modal.css')],
  template: `
    <div class="fixed top-0 bottom-0 left-0 right-0 p1 modal-mask">
      <ng-content></ng-content>
    </div>
  `
})
export class RioModal {};
