import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormSelectComponent } from './components/form-select/form-select.component';

import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    InputsModule,
    DropDownsModule
  ],
  declarations: [
    DynamicFormComponent,
    DynamicFieldDirective,
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
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
