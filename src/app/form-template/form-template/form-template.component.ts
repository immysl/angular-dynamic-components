import { Component, OnInit } from '@angular/core';

import { DataService } from '../../shared/data.service';
import { CommonStore } from '../../shared/common-store';

import { DynamicFieldConfig } from '../../dynamic-form/models/dynamic-field-config';
import { State } from '../../shared/models/state';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {
  configList: DynamicFieldConfig[];

  constructor(
    private dataService: DataService,
    private commonStore: CommonStore
  ) { }

  ngOnInit(): void {
    this.dataService
      .getSimpleForm()
      .subscribe((data: DynamicFieldConfig[]) => {
        const currentState: State = this.commonStore.getState();

        // update formConfigList in an immutable way
        this.commonStore.setState(
          Object.assign({}, currentState, { formConfigList: data })
        );
      });

    this.commonStore
        .changes
        .subscribe((state: State) => this.configList = state.formConfigList);
  }

  processForm(formValues): void {
    console.log(formValues);
  }

}
