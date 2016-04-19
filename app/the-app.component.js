import {Component} from 'angular2/core';

import Child from './the-child.component';

@Component({
  selector: 'the-app',
  directives: [Child],
  template: `
    <h1>{{'Hello from the app!'}}</h1>
    <the-child></the-child>
  `,
})
export default class TheAppComponent {}

TheAppComponent.parameters = [];
