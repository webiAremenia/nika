import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from '../app.globals';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Work} from '../_models/work/work';

@Injectable({
    providedIn: 'root'
})
export class WorkService {

    current: Work;
    works: Work[];
    work: Work;
    url;

    constructor(private http: HttpClient, private config: AppGlobals) {
        this.url = config.url;
    }

     getWorks(): Observable<Work[]> {
        return this.http.get<Work[]>(`${this.url}/api/work/`)
            .pipe(map(data => {
                    // console.log('Service', data);
                    this.works = data;
                    return this.works;
                }),
                catchError(err => throwError(err)));
    }

    findOne(slug): Work {
        return this.works.find(element => {
            return String(element.slug) === String(slug);
        });
    }

    getOne(slug): Observable<Work> {
        return this.http.get<any>(`${this.url}/api/work/${slug}`)
            .pipe(map(data => {
                    // console.log('Service', data);
                    this.work = data;
                    return this.work;
                }),
                catchError(err => throwError(err)));
    }

}
