import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { FormTemplateModule } from './form-template/form-template.module';

import { AppComponent } from './app.component';
import { DataService } from './shared/data.service';
import { CommonStore } from './shared/common-store';
import { FieldFormComponent } from './field-form/field-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    DropDownsModule,
    LabelModule,
    InputsModule,
    ButtonsModule,
    FormTemplateModule
  ],
  providers: [
    DataService,
    CommonStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
