import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';

import { State } from './models/state';

const state: State = {
    formConfigList: null
};

@Injectable()
export class CommonStore {
    store: BehaviorSubject<any> = new BehaviorSubject<any>(state);
    changes: Observable<any> = this.store.asObservable().distinctUntilChanged();

    getState() {
        return this.store.value;
    }

    setState(newState: State): void {
        this.store.next(newState);
    }
}
