import {Component} from '@angular/core';
import {Router, RouterEvent} from '@angular/router';
import {Location} from '@angular/common';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'nika';
    slider = false;
    contact = false;
    route: string;
    path;

    constructor(location: Location, router: Router) {
        router.events.subscribe((val) => {
            if (val instanceof RouterEvent) {
                if (val.url.indexOf('/work/') >= 0) {
                    this.path = '/works';
                } else if (val.url.indexOf('/story/') >= 0) {
                    this.path = '/stories';
                } else {
                    this.path = location.path();
                }
            }
        });

    }
}
