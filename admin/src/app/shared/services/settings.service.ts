import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from '../../app.globals';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    constructor(private http: HttpClient, private config: AppGlobals) {
        this.url = config.url;
        this.urlApi = config.url + '/admin';
    }

    url;
    urlApi;
    settings;

    getSettings() {
        return this.http.get(this.urlApi + '/settings').pipe(map(d => {
            this.settings = d;
            return d;
        }));
    }

    addSettings(settings) {
        return this.http.post(this.urlApi + '/settings', settings);
    }

    changeSettings(settings) {
        return this.http.put(this.urlApi + '/settings', settings);
    }

    deleteSettings(key) {
        return this.http.delete(this.urlApi + `/settings?key=${key}`);
    }
}
