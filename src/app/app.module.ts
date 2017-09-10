import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormTemplateModule } from './form-template/form-template.module';

import { AppComponent } from './app.component';
import { DataService } from './shared/data.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormTemplateModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
