import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from '../../app.globals';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    url;

    constructor(private  http: HttpClient, globals: AppGlobals) {
        this.url = globals.url + '/admin/group';
    }

    addLine() {
        const body = {
            position: 'right',
            middleBlock: {count: 0, blocks: []},
            largeBlock: {count: 0, blocks: []}
        };
        return this.http.post(this.url, body);
    }

    getGroup() {
        return this.http.get(this.url);
    }

    updatePosition(id, pos) {
        const body = {
            position: pos
        };
        return this.http.put(this.url + '/' + id, body);
    }

    deleteLine(id) {
        return this.http.delete(this.url + '/' + id);
    }

    addBlocks(currant) {
        return this.http.put(this.url + '/blocks/' + currant.id, currant);
    }
}
