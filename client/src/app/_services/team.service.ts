import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from '../app.globals';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class TeamService {

    url;

    constructor(
        private http: HttpClient,
        private config: AppGlobals) {
        this.url = config.url;
    }

    getTeam(): Observable<any> {
        return this.http.get<any>(`${this.url}/api/team`);
    }
}
