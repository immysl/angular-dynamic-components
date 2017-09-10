import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicFormConfig } from '../../models/dynamic-form-config';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  config: DynamicFormConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
