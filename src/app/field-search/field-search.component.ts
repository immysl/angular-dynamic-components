import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-search',
  templateUrl: './field-search.component.html',
  styleUrls: ['./field-search.component.scss']
})
export class FieldSearchComponent implements OnInit {
  @Input() componentList: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
