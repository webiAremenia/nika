import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from '../app.globals';
import {Observable} from 'rxjs';
import {TeamPage} from '../_models/team/TeamPage';
import {map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class TeamService {

    url;
    team: TeamPage;

    constructor(
        private http: HttpClient,
        private config: AppGlobals) {
        this.url = config.url;
    }

    getTeam(): Observable<any> {
        return this.http.get<any>(`${this.url}/api/team`)
            .pipe(
                map(page => {
                    this.team = page;
                    return page;
                })
            );
    }
}
