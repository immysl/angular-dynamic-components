import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicFieldConfig } from '../../models/dynamic-field-config';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements OnInit {
  config: DynamicFieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
