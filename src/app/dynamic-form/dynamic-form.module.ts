import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from './directives/dynamic-field/dynamic-field.directive';

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    InputsModule,
    DropDownsModule
  ],
  declarations: [
    DynamicFormComponent,
    DynamicFieldDirective
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
