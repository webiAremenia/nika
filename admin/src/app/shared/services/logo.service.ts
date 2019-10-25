import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from '../../app.globals';

@Injectable({
    providedIn: 'root'
})
export class LogoService {
    url;
    urlApi;
    candidateLogo;

    constructor(private http: HttpClient, private config: AppGlobals) {
        this.url = config.url;
        this.urlApi = config.url + '/admin';
    }

    getLogos() {
        return this.http.get(this.urlApi + '/logo');
    }

    postLogo(post) {
        return this.http.post(this.urlApi + '/logo', post);
    }

    putLogo(id, logo) {
        return this.http.put(this.urlApi + `/logo?id=` + id, logo);
    }

    deleteLogo(logo) {
        return this.http.delete(this.urlApi + `/logo?id=${logo._id}`);
    }

    getImages() {
        return this.http.get(this.urlApi + '/logo/media');
    }
}
