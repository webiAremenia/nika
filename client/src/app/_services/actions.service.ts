import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
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
                        window.innerWidth < 1020 && window.innerWidth > 820 ? 1.30 :
                            window.innerWidth < 820 && window.innerWidth > 767 ? 1.35 : 1
    });

    mobileResponsiveData = new BehaviorSubject<number>(window.innerWidth >= 768 ? 768 : 500);
    contactLocationSubject = new Subject<string>();

    constructor() {
    }

    getWindowSize() {
        return this.responsiveData.asObservable();
    }

    getMobileWindowSize() {
        return this.mobileResponsiveData.asObservable();
    }

    getContactLocation() {
        return this.contactLocationSubject.asObservable();
    }
}
