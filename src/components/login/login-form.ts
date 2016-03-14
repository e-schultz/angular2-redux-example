import { Component, EventEmitter, Input } from 'angular2/core';
import {
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Control,
  Validators
} from 'angular2/common';

import { Form, FormError, FormGroup, FormLabel } from '../form';
import { Alert } from '../alert';
import { Button } from '../button';
import { Input as FormInput} from '../input';

@Component({
  selector: 'login-form',
  inputs: ['isPending', 'hasError'],
  outputs: ['onSubmit'],
  directives: [
    FORM_DIRECTIVES, Alert, Button, FormInput,
    Form, FormError, FormGroup, FormLabel
  ],
  template: `
    <custom-form
      [ngFormModel]="group"
      (ngSubmit)="handleSubmit()"
    >
      <alert status='info' *ngIf="isPending">Loading...</alert>
      <alert status='error' *ngIf="hasError">
        Invalid username and password
      </alert>
      <form-group>
        <form-label>Username</form-label>
        <form-input
          inputType='text'
          placeholder='Username'
          [formControl]="username"></form-input>
        <form-error *ngIf="username.dirty && !username.valid">
          <div *ngIf="username.hasError('required')">
            Username required!
          </div>
        </form-error>
      </form-group>
       <form-group>
        <form-label>Password</form-label>
        <form-input
          inputType='password'
          placeholder='Password'
          [formControl]="password"></form-input>
        <form-error *ngIf="password.dirty && !password.valid">
          <div *ngIf="password.hasError('required')">
            Password required!
          </div>
        </form-error>
      </form-group>
      <form-group>
        <btn type="submit" classStyles="mr1">Login</btn>
        <btn classStyles="bg-red" (click)="reset()">Clear</btn>
      </form-group>
    </custom-form>
  `
})
export class LoginForm {
  private username: Control;
  private password: Control;
  private group: ControlGroup;
  private onSubmit: EventEmitter<Object> = new EventEmitter();

  constructor(private builder: FormBuilder) {
    this.reset();
  }

  handleSubmit() {
    this.onSubmit.emit(this.group.value);
  }

  reset() {
    this.username = new Control('', Validators.required);
    this.password = new Control('', Validators.required);

    this.group = this.builder.group({
      username: this.username,
      password: this.password
    });
  }
};
