import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicFormConfig } from '../../models/dynamic-form-config';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {
  config: DynamicFormConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
