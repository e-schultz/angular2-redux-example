import { Component } from 'angular2/core';

@Component({
  selector: 'custom-form',
  styles: [require('./form.css')],
  template: `
    <form>
      <ng-content></ng-content>
    </form>
  `
})
export class Form {
};
