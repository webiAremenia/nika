import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from '../app.globals';
import {Observable, throwError} from 'rxjs';
import {Group} from '../_models/group';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FooterService {

    url;
    imageUrl;
    groups;

    constructor(private http: HttpClient, config: AppGlobals) {
        this.url = `${config.url}/api/`;
        this.imageUrl = config.imageUrl;
    }

    getGroups(): Observable<Group[]> {
        return this.http.get<any[]>(`${this.url}group`)
            .pipe(map(data => {
                    this.groups = data.map(group => {
                        return {
                            id: group.id,
                            position: group.position,
                            middleBlock: group.middleBlock,
                            largeBlock: group.largeBlock,
                        };
                    });
                    console.log(this.groups);
                    return this.groups;
                }),
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                }));
    }
}
