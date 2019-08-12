import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from '../app.globals';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    url;

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

}
