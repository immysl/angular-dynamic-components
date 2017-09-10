import {
  Directive,
  OnInit,
  Input,
  Type,
  ComponentRef,
  ComponentFactoryResolver,
  ComponentFactory,
  ViewContainerRef
} from '@angular/core';

import { FormGroup } from '@angular/forms';

import { FormButtonComponent } from '../form-button/form-button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';

import { DynamicFieldConfig } from '../../models/dynamic-field-config';

const formComponents = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent
};

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() config: DynamicFieldConfig;
  @Input() group: FormGroup;

  component: ComponentRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit(): void {
    const component: Type<any> = formComponents[this.config.type];
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(component);

    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

}
