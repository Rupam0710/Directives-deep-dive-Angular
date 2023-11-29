import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHighLightDirective } from './Directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './Directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './Directives/unless/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighLightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
