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
    groups: Group[];

    constructor(private http: HttpClient, config: AppGlobals) {
        this.url = `${config.url}/api/`;
        this.imageUrl = config.imageUrl;
    }

    getGroups(): Observable<boolean> {
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
                    return true;
                }),
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                }));
    }

    getPortfolioById(id) {
        return this.http.get(this.url + 'portfolio/' + id);
    }

    getStories(arr) {
        return this.http.get(this.url + 'post/get-many/' + JSON.stringify(arr));
    }

    getFooter() {
        return {type: 'small', data: {
                size: 'small',
                bg: '#000',
                category: 'link',
                content: {
                    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing ?',
                    link: 'contact us',
                    url: 'https://www.facebook.com/'
                }
            }};
    }
}
