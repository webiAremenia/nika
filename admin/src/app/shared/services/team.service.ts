import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from '../../app.globals';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
    url;
    urlApi;

    constructor(private http: HttpClient, private config: AppGlobals) {
        this.url = config.url;
        this.urlApi = config.url + '/admin';
    }

    getTeam() {
        return this.http.get(this.urlApi + '/team');
    }



    putTeam(id, post) {
        return this.http.put(this.urlApi + `/team?id=` + id, post);
    }
}
