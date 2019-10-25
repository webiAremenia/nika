import {Component, HostListener, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
import {SettingsService} from '../shared/services/settings.service';
import {ActionsService} from '../shared/services/actions.service';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
    @ViewChild('page') layot;
    @ViewChild('trigger') customTrigger: TemplateRef<void>;
    triggerTemplate: TemplateRef<void> | null = null;
    user;
    isCollapsed = false;
    posts;

    constructor(
        private settingService: SettingsService,
        private actionsService: ActionsService,
        private data: DataService,
        private router: Router) {
        settingService.getSettings().subscribe();
        if (!localStorage.getItem('user')) {
            this.router.navigate(['/']).then();
        }
    }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        if (window.innerWidth < 992) {
            this.isCollapsed = true;
        }
    }

    /**
     * custom trigger can be TemplateRef
     */

    changeTrigger(): void {
        this.triggerTemplate = this.customTrigger;
    }

    logOut() {
        localStorage.clear();
        window.location.href = window.location.origin;
    }
}
