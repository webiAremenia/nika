import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from '../../app.globals';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

    url;
    urlApi;
    candidatePage;

    constructor(private http: HttpClient, config: AppGlobals) {
        this.url = config.url;
        this.urlApi = config.url + '/admin';
    }

    getPages() {
        return this.http.get(this.urlApi + '/page');
    }

    getPageById(id) {
        return this.http.get(this.urlApi + '/page/' + id);
    }

    postPage(page) {
        return this.http.post(this.urlApi + '/page', page);
    }

    putPage(id, page) {
        return this.http.put(this.urlApi + `/page?id=` + id, page);
    }

    deletePage(id) {
        return this.http.delete(this.urlApi + `/page?id=${id}`);
    }

    ckEditorSaveImage(form) {
        return this.http.post(this.urlApi + '/page/ckeditor', form);
    }

    ckEditorDeleteImage(image) {
        return this.http.delete(this.urlApi + `/page/ckeditor?name=${image}`);
    }
    ckDeleteDir(dir) {
        return this.http.delete(this.urlApi + `/page/ck/${dir}`);
    }
}
