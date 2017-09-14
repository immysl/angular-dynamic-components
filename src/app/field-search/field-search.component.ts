import { Component, OnInit, Input } from '@angular/core';
import { FieldList } from '../dynamic-form/models/field-list';

@Component({
  selector: 'app-field-search',
  templateUrl: './field-search.component.html',
  styleUrls: ['./field-search.component.scss']
})
export class FieldSearchComponent implements OnInit {
  searchList: Array<string>;

  constructor() { }

  ngOnInit() {
    this.searchList = Object.keys(FieldList);
  }

}
