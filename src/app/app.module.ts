import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormTemplateModule } from './form-template/form-template.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
