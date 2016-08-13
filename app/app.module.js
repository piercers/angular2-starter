import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import TheApp from './the-app.component';
import TheChild from './the-child.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    TheApp,
    TheChild,
  ],
  bootstrap: [TheApp],
})
export default class AppModule {}
