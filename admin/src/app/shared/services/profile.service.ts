import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from '../../app.globals';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

    url;
    urlApi;

    constructor(private http: HttpClient, config: AppGlobals) {
        this.url = config.url;
        this.urlApi = config.url + '/admin';
    }

    changePass(data) {
        return this.http.post(this.urlApi + '/profile', data);
    }
}
