import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ResponsiveData} from '../_models/ResponsiveData';

@Injectable({
    providedIn: 'root'
})
export class ActionsService {
    responsiveData = new BehaviorSubject<ResponsiveData>
    ({width: window.innerWidth > 1920 ?  1920 : window.innerWidth, height: window.innerHeight});

    constructor() {
    }

    getWindowSize() {
        return this.responsiveData.asObservable();
    }
}
