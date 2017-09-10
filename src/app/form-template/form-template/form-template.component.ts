import { Component, OnInit } from '@angular/core';

import { DataService } from '../../shared/data.service';
import { DynamicFieldConfig } from '../../dynamic-form/models/dynamic-field-config';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {
  configList: DynamicFieldConfig[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService
      .getSimpleForm()
      .subscribe(data => this.configList = data as DynamicFieldConfig[]);
  }

  processForm(formValues): void {
    console.log(formValues);
  }

}
