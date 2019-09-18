import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppGlobals} from '../../app.globals';

@Injectable({
    providedIn: 'root'
})
export class WorkService {

    url;
    urlApi;
    candidateWork;

    constructor(private http: HttpClient, config: AppGlobals) {
        this.url = config.url;
        this.urlApi = config.url + '/admin';
    }

    getWorks() {
        return this.http.get(this.urlApi + '/work');
    }

    postWork(work) {
        return this.http.post(this.urlApi + '/work', work);
    }

    putWork(id, work) {
        return this.http.put(this.urlApi + `/work/${id}`, work);
    }

    deleteWork(work) {
        return this.http.delete(this.urlApi + `/work?id=${work._id}`);
    }

    addVideo(form) {
        return this.http.post(this.urlApi + '/work/video', form);
    }

    changeVideo(id, form) {
        return this.http.put(this.urlApi + `/work/video?id=` + id, form);
    }

    deleteVideo(id) {
        return this.http.delete(this.urlApi + `/work/video?id=${id}`);
    }

    deleteVideoMany(arr) {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'}),
            body: arr
        };
        return this.http.delete(this.urlApi + `/work/video/many`, httpOptions);
    }

}
