import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: 'the-child',
  inputs: ['model'],
  outputs: ['modelChange'],
  template: `
    <h2>{{model.title}}</h2>
    <button (click)="onClick()">Click</button>
  `,
})
export default class TheChildComponent {
  constructor() {
    this.modelChange = new EventEmitter();
  }

  onClick() {
    this.modelChange.emit({
      ...this.model,
      clicked: this.model.clicked + 1,
    });
  }
}

TheChildComponent.parameters = [];
