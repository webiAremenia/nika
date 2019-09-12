import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ResponsiveData} from '../../../_models/ResponsiveData';
import {ActionsService} from '../../../_services/actions.service';
import {TeamService} from '../../../_services/team.service';
import {TeamPage} from '../../../_models/team/TeamPage';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
    done = false;
    pageContent: TeamPage;
    windowSubscription: Subscription;
    windowSize: ResponsiveData;

    constructor(
        private teamService: TeamService,
        private actionsService: ActionsService) {
        this.windowSubscription = actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);
    }

    ngOnInit() {
        // this.getAll();
        this.getPage();
    }

    ngOnDestroy() {
        this.windowSubscription.unsubscribe();
    }

    getPage() {
        this.teamService.getTeam().subscribe((d: TeamPage[]) => {
            this.done = true;
            this.pageContent = d[0];
            console.log(this.pageContent);
        });
    }

    // getAll() {
    //     if (this.service.pages) {
    //         this.pages = this.service.pages;
    //         this.page = this.pages.find(p => {
    //             return p.key === 'page_about';
    //         });
    //         this.done = true;
    //     } else {
    //         this.service.getAll().subscribe(
    //             data => {
    //                 this.pages = data;
    //                 this.page = this.pages.find(p => {
    //                     return p.key === 'page_about';
    //                 });
    //                 this.done = true;
    //             },
    //             err => console.log(err)
    //         );
    //     }
    // }

}
