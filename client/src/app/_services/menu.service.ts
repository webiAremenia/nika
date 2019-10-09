import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from '../app.globals';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Settings} from '../_models/Settings';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    url;
    settingRX = new BehaviorSubject<Array<Settings>>(null);

    constructor(private http: HttpClient, config: AppGlobals) {
        this.url = `${config.url}/api/`;
    }

    getMenuText(): Observable<any> {
        return this.http.get<any>(`${this.url}settings/menu-text`);
    }

    getMenuUrl(): Observable<any> {
        return this.http.get<any>(`${this.url}settings/meet-us-url`);
    }

    getMenus(): Observable<any> {
        return this.http.get(this.url + '/menu');
    }

    getSettings(): Observable<any> {
        return this.http.get(this.url + '/settings')
            .pipe(
                map((data: Settings[]) => {
                    this.settingRX.next(data);
                    return data;
                }),
                catchError( err => throwError(err))
            );
    }


    // // // // // GET RX DATA // // // // //

    getSettingsRX() {
        return this.settingRX.asObservable();
    }

}
