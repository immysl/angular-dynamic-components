import { Component, OnInit } from '@angular/core';

import { DynamicFormConfig } from '../../dynamic-form/models/dynamic-form-config';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {
  config: DynamicFormConfig[] = [
    {
      type: 'input',
      label: 'Full Name',
      name: 'name',
      placeholder: 'Enter your full name'
    },
    {
      type: 'input',
      label: 'Email',
      name: 'email',
      placeholder: 'Enter your email address'
    },
    {
      type: 'select',
      label: 'Gender',
      name: 'gender',
      options: ['Male', 'Female', 'Can\t specify'],
      placeholder: 'Select your gender'
    },
    {
      type: 'button',
      label: 'Submit',
      name: 'submit'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
