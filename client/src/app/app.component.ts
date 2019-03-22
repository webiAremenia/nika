import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from '@angular/common';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'nika';

    route: string;

    constructor(location: Location, router: Router) {
        router.events.subscribe((val) => {
            if (location.path() != '') {
                this.route = location.path();
                // console.log(this.route)
            } else this.route = ''
        });
    }

    ngOnInit() {

    }
}
