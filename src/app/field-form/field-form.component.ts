import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { FieldList } from '../dynamic-form/models/field-list';
import { CommonStore } from '../shared/common-store';
import { State } from '../shared/models/state';

@Component({
  selector: 'app-field-form',
  templateUrl: './field-form.component.html',
  styleUrls: ['./field-form.component.scss']
})
export class FieldFormComponent implements OnInit {
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

  addField(selectedInput: string) {
    const currentState = this.commonStore.getState();

    currentState.formConfigList.push({
      type: selectedInput,
      label: 'Default Label',
      name: 'default',
      placeholder: 'Some Placeholder'
    });

    this.commonStore.setState(
      Object.assign({}, currentState, { formConfigList: currentState.formConfigList })
    );
  }

}
