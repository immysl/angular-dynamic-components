import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicFieldConfig } from '../../models/dynamic-field-config';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  config: DynamicFieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
