import {Component, View, Inject, OnDestroy, OnInit} from 'angular2/core';

@Component({
  selector: 'about-page'
})
@View({
  template: `
    <div>About Page</div>
  `
})
export default class AboutPage {

  protected unsubscribe: Function;

  constructor( @Inject('ngRedux') private ngRedux) {

  }

  ngOnInit() {
    this.unsubscribe = this.ngRedux.connect(
      this.mapStateToThis,
      this.mapDispatchToThis)(this);
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  mapStateToThis(state) { return {}; }

  mapDispatchToThis(dispatch) {}
}
