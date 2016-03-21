import { Component } from 'angular2/core';

@Component({
  selector: 'rio-logo',
  styles: [require('./logo.css')],
  template: `
    <img
      class="logo"
      [src]="LogoImage"
      alt="Rangle.io"
    />
  `
})
export class RioLogo {
  private LogoImage = require('../../assets/rangleio-logo.svg');
};
