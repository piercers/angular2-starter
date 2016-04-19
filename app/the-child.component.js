import {Component} from 'angular2/core';

@Component({
  selector: 'the-child',
  template: `
    <h2>I'm the child component</h2>
  `,
})
export default class TheChildComponent {}

TheChildComponent.parameters = [];
