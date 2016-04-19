import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import Child from './the-child.component';

@Component({
  selector: 'the-app',
  directives: [Child],
  template: `
    <h1>{{title | async}}</h1>
    <the-child></the-child>
  `,
})
export default class TheAppComponent {
  constructor() {
    this.title = Observable.of('Hello from the app')
      .map(title => title + '!');
  }
}

TheAppComponent.parameters = [];
