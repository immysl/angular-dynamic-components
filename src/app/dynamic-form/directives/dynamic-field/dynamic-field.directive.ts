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

import { FieldConfig } from '../../../shared/models/field-config';
import { FieldList } from '../../../shared/models/field-list';

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() config: FieldConfig;
  @Input() group: FormGroup;

  component: ComponentRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit(): void {
    const component: Type<any> = FieldList[this.config.type];
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(component);

    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

}
