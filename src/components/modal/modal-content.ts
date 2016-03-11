import { Component } from 'angular2/core';

@Component({
  selector: 'modal-content',
  styles: [require('./modal.css')],
  template: `
    <div class="p1 z4 bg-white modal-content">
      <ng-content></ng-content>
    </div>
  `
})
export class ModalContent {
};
