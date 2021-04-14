import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanitizerComponent } from './sanitizer/sanitizer.component';
// import { WysiwygComponent } from './wysiwyg/wysiwyg.component';

@NgModule({
  declarations: [
    AppComponent,
    SanitizerComponent
    // WysiwygComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
