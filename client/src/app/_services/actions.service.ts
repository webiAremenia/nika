import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {WindowSize} from '../_models/WindowSize';

@Injectable({
    providedIn: 'root'
})
export class ActionsService {
    innerSize = new BehaviorSubject<WindowSize>({width: window.innerWidth > 1920 ?  1920 : window.innerWidth, height: window.innerHeight});

    constructor() {
    }

    getWindowSize() {
        return this.innerSize.asObservable();
    }
}
