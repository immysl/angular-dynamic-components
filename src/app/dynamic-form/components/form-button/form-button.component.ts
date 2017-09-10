import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicFormConfig } from '../../models/dynamic-form-config';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements OnInit {
  config: DynamicFormConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
