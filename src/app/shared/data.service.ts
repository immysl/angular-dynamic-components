import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

const SIMPLE_FORM_URL = '/assets/api/simple-form.json';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getSimpleForm(): Observable<any> {
    return this.http.get(SIMPLE_FORM_URL);
  }

}
