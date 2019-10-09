import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {ActionsService} from './_services/actions.service';
import {MenuService} from './_services/menu.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'nika';
    slider = false;
    contact = false;
    route: string;
    path;
    done = false;
    constructor(
        location: Location,
        router: Router,
        private actionsService: ActionsService,
        private menuService: MenuService
    ) {
        menuService.getSettings().subscribe();
    }

    ngOnInit() {
        this.done = true;
    }

    @HostListener('window:resize', ['$event']) onResize(e) {
        if (window.innerWidth > 767) {
            const size = {
                width: window.innerWidth > 1920 ? 1920 : window.innerWidth,
                height: window.innerHeight,
                rate:
                    window.innerWidth >= 1920 ? 1 :
                        window.innerWidth < 1520 && window.innerWidth > 1220 ? 1.20 :
                            window.innerWidth < 1220 && window.innerWidth > 1020 ? 1.25 :
                                window.innerWidth < 1024 && window.innerWidth > 820 ? 1.30 :
                                    window.innerWidth < 820 && window.innerWidth > 767 ? 1.35 : 1
            };
            this.actionsService.responsiveData.next(size);
            this.actionsService.mobileResponsiveData.next(768);
        } else {
            const width = window.innerWidth;
            this.actionsService.mobileResponsiveData.next(width);
        }
    }

    onActivate(event) {
        window.scroll(0, 0);
    }
}
