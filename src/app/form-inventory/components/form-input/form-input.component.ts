import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../../../shared/models/field-config';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  config: FieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
