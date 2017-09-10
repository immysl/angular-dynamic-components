import { Directive, Input } from '@angular/core';
import { DynamicFieldConfig } from '../../models/dynamic-field-config';

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective {
  @Input() config: DynamicFieldConfig;

  constructor() { }

}
