import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { FormInventoryComponent } from './form-inventory.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormSelectComponent } from './components/form-select/form-select.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    DropDownsModule,
    LabelModule,
    InputsModule,
    ButtonsModule
  ],
  declarations: [
    FormInventoryComponent,
    FormInputComponent,
    FormButtonComponent,
    FormSelectComponent
  ],
  entryComponents: [
    FormInputComponent,
    FormButtonComponent,
    FormSelectComponent
  ],
  exports: [
    FormInventoryComponent
  ]
})
export class FormInventoryModule { }
