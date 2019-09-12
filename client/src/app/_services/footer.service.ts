import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from '../app.globals';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FooterService {

    url;
    imageUrl;

    constructor(private http: HttpClient, config: AppGlobals) {
        this.url = `${config.url}/api/`;
        this.imageUrl = config.imageUrl;
    }

    getFooter(): Observable<any> {
        return this.http.get<any>(`${this.url}settings/footer-text`);
    }
    getFooterLink(): Observable<any> {
        return this.http.get<any>(`${this.url}settings/footer-link-url`);
    }
}
