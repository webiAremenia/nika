import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from '../../app.globals';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

    url;
    urlApi;

    constructor(private http: HttpClient, private config: AppGlobals) {
        this.url = config.url;
        this.urlApi = config.url + '/admin';
    }

    getContact() {
        return this.http.get(this.urlApi + '/contact');
    }


    putContact(id, post) {
        return this.http.put(this.urlApi + '/contact/?id=' + id, post);
    }
}
