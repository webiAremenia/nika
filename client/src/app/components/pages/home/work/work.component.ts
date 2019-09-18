import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {WorkService} from '../../../../_services/work.service';
import {Work} from '../../../../_models/work/work';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {ResponsiveData} from '../../../../_models/ResponsiveData';
import {ActionsService} from '../../../../_services/actions.service';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, OnDestroy {

    @ViewChild('workContent') workContent: ElementRef;
    work: Work;
    slug;
    windowSubscription: Subscription;
    windowSize: ResponsiveData;
    sectionArr: Array<number> = [];
    done = false;

    constructor(
        private actionsService: ActionsService,
        private workService: WorkService,
        private activatedRoute: ActivatedRoute
    ) {
        this.windowSubscription = actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);
        this.actionsService.workOpened.next(true);
        this.actionsService.getWorkScrollPosition().subscribe(pos => {
            this.initAnimation(pos);
        });
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.slug = params.slug;
            this.initWork();
        });
    }

    initWork() {
        if (this.workService.current) {
            this.work = this.workService.current;
        } else {
            this.work = this.workService.works.filter(w => w.slug === this.slug)[0];
            this.workService.current = this.work;
        }
        // console.log(this.work);
        this.workService.getOne(this.work.slug).subscribe(d => {
            this.work.details = d.details;
            this.done = true;
        });
    }

    initAnimation(position) {
        if (this.sectionArr.length === 0) {
            this.initSectionsArr();
        }
        const bannerHeight = window.innerHeight + 100;

        let sum = 0;

        for (let i = 0; i < this.sectionArr.length; i++) {
            sum += this.sectionArr[i];
            if (position < -(bannerHeight + sum)) {
                document.getElementById('section_' + (i + 1)).style.opacity = '1';
            }
        }

    }

    initSectionsArr() {
        const sectionCount = document.querySelectorAll('.work-dynamic-content-details').length;
        const mobSectionCount = document.querySelectorAll('.mobile-components').length;
        for (let i = 0; i < sectionCount; i++) {
            this.sectionArr.push(document.getElementById('section_' + (i + 1)).offsetHeight);
        }
        for (let i = 0; i < mobSectionCount; i++) {
            this.sectionArr.push(document.getElementById('mob_section_' + (i + 1)).offsetHeight);
        }
    }

    ngOnDestroy(): void {
        this.done = false;
        this.actionsService.workOpened.next(false);
        this.actionsService.workScrollPosition.next(0);
    }
}
