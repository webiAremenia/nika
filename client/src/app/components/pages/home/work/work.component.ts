import {Component, OnDestroy, OnInit} from '@angular/core';
import {WorkService} from '../../../../_services/work.service';
import {Work} from '../../../../_models/work/work';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";
import {ResponsiveData} from "../../../../_models/ResponsiveData";
import {PageService} from "../../../../_services/page.service";
import {ActionsService} from "../../../../_services/actions.service";

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, OnDestroy {

    work: Work;
    slug;
    windowSubscription: Subscription;
    windowSize: ResponsiveData;

    constructor(
        private actionsService: ActionsService,
        private workService: WorkService,
        private activatedRoute: ActivatedRoute
    ) {
        this.windowSubscription = actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);
        this.actionsService.workOpened.next(true);
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.slug = params.slug;
            this.initWork();
            console.log('work init');
        });
    }

    initWork() {
        if (this.workService.current) {
            this.work = this.workService.current;
        } else {
            this.work = this.workService.works.filter(w => w.slug === this.slug)[0];
            this.workService.current = this.work;
        }
    }

    ngOnDestroy(): void {
        this.actionsService.workOpened.next(false);
    }
}
