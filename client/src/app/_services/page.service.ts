import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from '../app.globals';
import {Page} from '../_models/page';
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class PageService {
    pages: Page[];
    page: Page;
    url;

    constructor(private http: HttpClient, private config: AppGlobals) {
        this.url = config.url;
    }


    getAll(): Observable<Page[]> {
        return this.http.get<any[]>(`${this.url}/api/page/`)
            .pipe(map(data => {
                    this.pages = data.map(page => {
                        return {
                            id: page._id,
                            key: page.key,
                            content: page.content,
                        };
                    });
                    return this.pages;
                }),
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                }));
    }

    getOne(id): Observable<Page> {
        return this.http.get<any>(`${this.url}/api/page/${id}`)
            .pipe(map(page => {
                this.page = {
                    id: page._id,
                    key: page.key,
                    content: page.content,
                };
                return this.page;
            }));
    }
}
