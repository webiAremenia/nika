import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from '../../app.globals';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    // group = [
    //     {line: [{size: 'large', position: 'right'}, {size: 'middle', position: 'left'}], blocks: []},
    //     {line: [{size: 'large', position: 'left'}, {size: 'middle', position: 'right'}], blocks: []},
    //     {line: [{size: 'large', position: 'right'}, {size: 'middle', position: 'left'}], blocks: []},
    // ];
    url;

    constructor(private  http: HttpClient, globals: AppGlobals) {
        this.url = globals.url + '/admin/group';
    }

    addLine() {
        const body = {
            position: 'right',
            middleBlock: [],
            largeBlock: []
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
}
