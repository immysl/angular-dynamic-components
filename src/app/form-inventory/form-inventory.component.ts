import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { FieldList } from '../shared/models/field-list';
import { CommonStore } from '../shared/common-store';
import { State } from '../shared/models/state';

@Component({
  selector: 'app-form-inventory',
  templateUrl: './form-inventory.component.html',
  styleUrls: ['./form-inventory.component.scss']
})
export class FormInventoryComponent implements OnInit {
  fieldList: Array<string>;
  form: FormGroup;

  constructor(private commonStore: CommonStore) { }

  ngOnInit() {
    this.fieldList = Object.keys(FieldList);

    this.form = new FormGroup({
      type: new FormControl(''),
      name: new FormControl(''),
      label: new FormControl(''),
      placeholder: new FormControl('')
    });
  }

  addField(formValues) {
    const currentState = Object.assign({}, this.commonStore.getState());

    currentState.formConfigList.push({
      type: formValues.type,
      name:  formValues.name || 'default',
      label: formValues.label || 'Default Label',
      placeholder: formValues.placeholder || 'Some Placeholder'
    });

    this.commonStore.setState(
      Object.assign({}, currentState, { formConfigList: currentState.formConfigList })
    );
  }

}
