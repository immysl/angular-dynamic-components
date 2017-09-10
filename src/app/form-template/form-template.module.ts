import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';

import { FormTemplateComponent } from './form-template/form-template.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormModule
  ],
  declarations: [FormTemplateComponent],
  exports: [FormTemplateComponent]
})
export class FormTemplateModule { }
