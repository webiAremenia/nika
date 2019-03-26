import {Component} from '@angular/core';
import {Router} from '@angular/router';
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
            this.path = location.path();
            console.log(this.path);
            // if (location.path() === '') {
            //     this.slider = true;
            //     this.contact = false;
            //     this.path = location.path();
            //     console.log(this.path);
            // } else if (location.path() === '/contact') {
            //     this.slider = false;
            //     this.contact = true;
            //     this.path = location.path();
            //     console.log(this.path);
            // }
        });

    }

}
