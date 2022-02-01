import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule, CodemirrorModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
