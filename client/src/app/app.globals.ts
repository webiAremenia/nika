import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AppGlobals {
    url = environment.queryUrl;
    imageUrl = environment.queryUrl + '/uploads';

    constructor() {
    }
}
