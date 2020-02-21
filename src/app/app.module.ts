import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StringInputComponent } from './string-input/string-input.component';
import { RegexInputComponent } from
 './regex-input/regex-input.component';
import { HighlightPipe } from './highlight.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, StringInputComponent, RegexInputComponent, HighlightPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
