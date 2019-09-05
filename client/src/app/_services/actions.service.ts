import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ResponsiveData} from '../_models/ResponsiveData';

@Injectable({
    providedIn: 'root'
})
export class ActionsService {
    responsiveData = new BehaviorSubject<ResponsiveData>
    ({
        width: window.innerWidth > 1920 ?  1920 : window.innerWidth,
        height: window.innerHeight,
        rate:
            window.innerWidth >= 1920 ? 1 :
            window.innerWidth < 1520 && window.innerWidth > 1220 ? 1.20 :
                window.innerWidth < 1220 && window.innerWidth > 1020 ? 1.25 :
                    window.innerWidth < 1020 && window.innerWidth > 820 ? 1.30 : 1
    });

    constructor() {
    }

    getWindowSize() {
        return this.responsiveData.asObservable();
    }
}
