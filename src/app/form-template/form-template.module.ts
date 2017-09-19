import { NgModule } from '@angular/core';

import { FormInventoryModule } from '../form-inventory/form-inventory.module';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';

import { FormTemplateComponent } from './form-template/form-template.component';

@NgModule({
  imports: [
    FormInventoryModule,
    DynamicFormModule
  ],
  declarations: [FormTemplateComponent],
  exports: [FormTemplateComponent]
})
export class FormTemplateModule { }
