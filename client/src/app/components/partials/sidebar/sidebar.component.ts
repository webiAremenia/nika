import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {MenuService} from '../../../_services/menu.service';
import {LogoService} from '../../../_services/logo.service';
import {Logo} from '../../../_models/logo';
import {AppGlobals} from '../../../app.globals';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    route: string;
    menuText;
    menuUrl;
    logos: Logo[];
    done = false;
    imageUrl;
    menus;

    constructor(
        private location: Location,
        private router: Router,
        private menuService: MenuService,
        private logoService: LogoService,
        private config: AppGlobals
    ) {
        this.imageUrl = config.imageUrl + '/medias/';
        router.events.subscribe((val) => {
            // console.log(location.path())
        });
    }

    ngOnInit(): void {
        this.getMenuText();
        this.logoService.getImages().subscribe(data => {
            this.logos = data;
            this.done = true;
        }, e => console.log(e));
        this.menuService.getMenus().subscribe(data => {
            this.menus = data.filter(m => {
                return m.isActive;
            });
        });
    }

    getMenuText() {
        this.menuService.getMenuText().subscribe(date => {
            this.menuText = date || 'You  can creat this content in admin panel Settings/key = menu-text';
        });
        this.menuService.getMenuUrl().subscribe(date => {
            this.menuUrl = date || 'You  can creat this content in admin panel Settings/key = meet-us-url';
        });


    }

}



