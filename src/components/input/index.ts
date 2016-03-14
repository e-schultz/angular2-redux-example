import { Component } from 'angular2/core';
import { NgFormControl } from 'angular2/common';

@Component({
  selector: 'form-input',
  inputs: ['inputType', 'placeholder', 'formControl'],
  directives: [ NgFormControl ],
  template: `
    <input
      [type]="inputType"
      class="block col-12 mb1 input"
      [placeholder]="placeholder"
      [ngFormControl]="formControl"
    />
  `
})
export class Input {
};
