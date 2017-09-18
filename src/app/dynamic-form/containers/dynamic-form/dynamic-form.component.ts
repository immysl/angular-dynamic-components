import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { DataService } from '../../../shared/data.service';
import { CommonStore } from '../../../shared/common-store';

import { DynamicFieldConfig } from '../../models/dynamic-field-config';
import { State } from '../../../shared/models/state';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  configList: DynamicFieldConfig[];

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private commonStore: CommonStore
  ) { }

  ngOnInit(): void {
    this.getConfigList();
    this.subscribeConfigListChanges();
  }

  getConfigList() {
    this.dataService
      .getSimpleForm()
      .subscribe((data: DynamicFieldConfig[]) => {
        const currentState: State = this.commonStore.getState();

        // update formConfigList in an immutable way
        this.commonStore.setState(
          Object.assign({}, currentState, { formConfigList: data })
        );
      });
  }

  subscribeConfigListChanges() {
    this.commonStore
      .changes
      .subscribe((state: State) => {
        if (state.formConfigList) {
          this.configList = state.formConfigList;
          this.form = this.createGroup();
        }
      });
  }

  createGroup(): FormGroup {
    const group = this.formBuilder.group({});

    this.configList.forEach((control: DynamicFieldConfig) =>
      group.addControl(
        control.name,
        this.formBuilder.control('')
      )
    );

    return group;
  }

  submitForm(formValues): void {
    this.submitted.emit(formValues);
  }

}
