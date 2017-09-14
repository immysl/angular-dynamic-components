import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { FormTemplateModule } from './form-template/form-template.module';

import { AppComponent } from './app.component';
import { DataService } from './shared/data.service';
import { FieldSearchComponent } from './field-search/field-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DropDownsModule,
    FormTemplateModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
