import {Component} from 'angular2/core';

@Component({
  selector: 'the-app',
  template: `
    <h1>{{'Hello from the app!'}}</h1>
  `,
})
export default class TheAppComponent {}

TheAppComponent.parameters = [];
