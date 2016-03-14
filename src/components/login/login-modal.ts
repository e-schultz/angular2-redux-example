import { Component, EventEmitter } from 'angular2/core';

import { Modal, ModalContent } from '../modal';
import { LoginForm } from './login-form';

@Component({
  selector: 'login-modal',
  inputs: ['loginForm', 'isPending', 'hasError'],
  outputs: ['onSubmit'],
  directives: [Modal, ModalContent, LoginForm],
  template: `
    <modal>
      <modal-content>
        <h1 class='mr2 ml2'>Login</h1>
        <login-form
          [isPending]="isPending"
          [hasError]="hasError"
          (onSubmit)="handleSubmit($event)"></login-form>
      </modal-content>
    </modal>
  `
})
export class LoginModal {
  private onSubmit: EventEmitter<Object> = new EventEmitter();

  handleSubmit(login) {
    this.onSubmit.emit(login);
  }
};
