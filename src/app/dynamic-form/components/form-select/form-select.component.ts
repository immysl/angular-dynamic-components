import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicFieldConfig } from '../../models/dynamic-field-config';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {
  config: DynamicFieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
