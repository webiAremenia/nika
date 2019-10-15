import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {MenuService} from '../../../_services/menu.service';
import {LogoService} from '../../../_services/logo.service';
import {Logo} from '../../../_models/logo';
import {AppGlobals} from '../../../app.globals';
import {Subscription} from 'rxjs';
import {ResponsiveData} from '../../../_models/ResponsiveData';
import {ActionsService} from '../../../_services/actions.service';
import {Menu} from '../../../_models/Menu';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

    route: string;
    logos: Logo[];
    done = false;
    imageUrl;
    menu: Menu;
    menuDone = false;
    showMenu = false;
    imgLink: string;

    settingSubscription: Subscription;
    windowSubscription: Subscription;
    windowSize: ResponsiveData;

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
        private actionsService: ActionsService,
        private config: AppGlobals
    ) {
        this.imageUrl = config.imageUrl + '/medias/';
        this.initData();
        // router.events.subscribe((val) => {
        //     // console.log(location.path())
        // });
    }

    ngOnInit(): void {
        if (window.innerWidth > 992) {
            this.logoService.getImages()
                .subscribe(data => {
                    this.logos = data;
                    this.done = true;
                }, e => console.log(e));
        }
        this.menuService.getMenus()
            .subscribe(data => {
                this.menu = data.menu;
                this.menuDone = true;
            });
    }

    ngOnDestroy(): void {
        this.windowSubscription.unsubscribe();
        this.settingSubscription.unsubscribe();
    }

    showMobMenu(): void {
        this.showMenu = true;
        setTimeout(() => {
            document.getElementById('hiddenCont').style.opacity = '1';
        }, 50);
    }

    hideMobMenu(): void {
        const menu = document.getElementById('hiddenCont');
        if (menu) {
            menu.style.opacity = '0';
        }
        setTimeout(() => {
            this.showMenu = false;
        }, 200);
    }

    initData(): void {
        this.windowSubscription = this.actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);
        this.settingSubscription = this.menuService.getSettingsRX()
            .subscribe(settings => {
                if (settings) {
                    this.imgLink = settings.find(st => st.key === 'sidebar-link').value;
                }
            });
    }


}



