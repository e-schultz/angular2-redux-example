import { Component } from 'angular2/core';

import { Modal, ModalContent } from '../modal';
import { LoginForm } from './login-form';

@Component({
  selector: 'login-modal',
  directives: [Modal, ModalContent, LoginForm],
  template: `
    <modal [isVisible]=false>
      <modal-content>
        <h1 class='mr2 ml2'>Login</h1>
        <login-form></login-form>
      </modal-content>
    </modal>
  `
})
export class LoginModal {
};


