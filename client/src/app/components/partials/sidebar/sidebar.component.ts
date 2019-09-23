import {Component, HostListener, OnInit} from '@angular/core';
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
    logos: Logo[];
    done = false;
    imageUrl;
    menu: any;
    menuDone = false;
    showMenu = false;

    @HostListener('document:click', ['$event'])
    onDocClick(event) {
        const div = event.target;
        if (div.id !== 'mobile-toggle-icon') {
            this.hideMobMenu();
        }
    }

    constructor(
        private location: Location,
        private router: Router,
        private menuService: MenuService,
        private logoService: LogoService,
        private config: AppGlobals
    ) {
        this.imageUrl = config.imageUrl + '/medias/';
        // router.events.subscribe((val) => {
        //     // console.log(location.path())
        // });
    }

    ngOnInit(): void {
        this.logoService.getImages().subscribe(data => {
            this.logos = data;
            this.done = true;
        }, e => console.log(e));
        this.menuService.getMenus().subscribe(data => {
            this.menu = data.menu;
            this.menuDone = true;
        });
    }

    showMobMenu() {
        this.showMenu = true;
        setTimeout(() => {
            document.getElementById('hiddenCont').style.opacity = '1';
        }, 50);
    }

    hideMobMenu() {
        const menu = document.getElementById('hiddenCont');
        if (menu) {
            menu.style.opacity = '0';
        }
        setTimeout(() => {
            this.showMenu = false;
        }, 200);
    }


}



