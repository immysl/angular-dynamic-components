import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { DynamicFieldConfig } from '../../models/dynamic-field-config';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() configList: DynamicFieldConfig[] = [];
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.createGroup();
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
