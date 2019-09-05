import {Component, OnDestroy, OnInit} from '@angular/core';
import {PageService} from '../../../_services/page.service';
import {Page} from '../../../_models/page';
import {Subscription} from 'rxjs';
import {ResponsiveData} from '../../../_models/ResponsiveData';
import {ActionsService} from '../../../_services/actions.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
    pages: Page[];
    done = false;
    page: Page;

    windowSubscription: Subscription;
    windowSize: ResponsiveData;

    constructor(private service: PageService, private actionsService: ActionsService) {
        this.windowSubscription = actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);
    }

    ngOnInit() {
        this.getAll();
    }

    ngOnDestroy() {
        this.windowSubscription.unsubscribe();
    }

    getAll() {
        if (this.service.pages) {
            this.pages = this.service.pages;
            this.page = this.pages.find(p => {
                return p.key === 'page_about';
            });
            this.done = true;
        } else {
            this.service.getAll().subscribe(
                data => {
                    this.pages = data;
                    this.page = this.pages.find(p => {
                        return p.key === 'page_about';
                    });
                    this.done = true;
                },
                err => console.log(err)
            );
        }
    }

}
