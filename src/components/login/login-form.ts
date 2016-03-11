import { Component } from 'angular2/core';

import { Form, FormError, FormGroup, FormLabel } from '../form';
import { Alert } from '../alert';
import { Button } from '../button';
import { Input } from '../input';

@Component({
  selector: 'login-form',
  directives: [Alert, Form, FormError, FormGroup, FormLabel, Button, Input],
  template: `
    <custom-form>
      <alert status='info' [isVisible]=true>Loading...</alert>
      <alert status='error' [isVisible]=false>
        Invalid username and password
      </alert>
      <form-group>
        <form-label>Username</form-label>
        <form-input inputType='text' placeholder='Username'></form-input>
        <form-error [isVisible]=true>Username error!</form-error>
      </form-group>
       <form-group>
        <form-label>Password</form-label>
        <form-input inputType='password' placeholder='Password'></form-input>
        <form-error [isVisible]=false>Password error!</form-error>
      </form-group>
      <form-group>
        <btn classStyles="mr1">Login</btn>
        <btn classStyles="bg-red">Clear</btn>
      </form-group>
    </custom-form>
  `
})
export class LoginForm {
};
