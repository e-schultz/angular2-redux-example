import { Component } from 'angular2/core';

@Component({
  selector: 'form-input',
  inputs: ['inputType', 'placeholder'],
  template: `
    <input
      [type]="inputType"
      class="block col-12 mb1 input"
      [placeholder]="placeholder"
    />
  `
})
export class Input {
};
