import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from '../../app.globals';

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {

    url;
    urlApi;
    candidatePortfolio;

    constructor(private http: HttpClient, config: AppGlobals) {
        this.url = config.url;
        this.urlApi = config.url + '/admin';
    }

    getPortfolio() {
        return this.http.get(this.urlApi + '/portfolio');
    }

    getPortfolioById(id) {
        return this.http.get(this.urlApi + '/portfolio/' + id);
    }

    postPortfolio(portfolio) {
        return this.http.post(this.urlApi + '/portfolio', portfolio);
    }

    putPortfolio(id, portfolio) {
        return this.http.put(this.urlApi + `/portfolio?id=` + id, portfolio);
    }

    deletePortfolio(portfolio) {
        return this.http.delete(this.urlApi + `/portfolio?id=${portfolio._id}`);
    }

    ckEditorSavePortfolioImage(form) {
        console.log(1111111)
        return this.http.post(this.urlApi + '/portfolio/ckeditor/', form);
    }

    ckEditorDeletePortfolioImage(image) {
        return this.http.delete(this.urlApi + `/portfolio/ckeditor?name=${image}`);

    }

    ckDeleteDir(dir) {
        return this.http.delete(this.urlApi + `/portfolio/ck/${dir}`);
    }
}
