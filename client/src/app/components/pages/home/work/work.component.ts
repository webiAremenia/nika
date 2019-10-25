import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { WorkService } from '../../../../_services/work.service';
import { Work } from '../../../../_models/work/work';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResponsiveData } from '../../../../_models/ResponsiveData';
import { ActionsService } from '../../../../_services/actions.service';
import { AppGlobals } from '../../../../app.globals';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, OnDestroy {

    @ViewChild('workContent') workContent: ElementRef;
    imageUrl;
    work: Work;
    slug;
    windowSubscription: Subscription;
    positionSubscription: Subscription;
    windowSize: ResponsiveData;
    sectionArr: Array<number> = [];
    done = false;

    constructor(
        private actionsService: ActionsService,
        private workService: WorkService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        config: AppGlobals
    ) {
        this.imageUrl = config.imageUrl + '/work/';
        this.windowSubscription = actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);
        this.actionsService.workOpened.next(true);
        this.positionSubscription = this.actionsService.getWorkScrollPosition()
            .subscribe(pos => {
                this.initAnimation(pos);
            });
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.slug = params.slug;
            this.sectionArr = [];
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
        if (this.work) {
            this.workService.getOne(this.work.slug)
                .subscribe(d => {
                    this.work.details = d.details;
                    this.done = true;
                });
        } else {
            this.router.navigate(['/']).then();
        }
    }

    initAnimation(position) {
        if (this.sectionArr.length === 0) {
            this.initSectionsArr();
        }

        if (window.innerWidth > 767) {
            this.animateDesktop(position);
        } else {
            this.animateMobile(position);
        }
    }

    animateDesktop(position) {
        const bannerHeight = window.innerHeight + 100;
        let sum = 0;
        for (let i = 0; i < this.sectionArr.length; i++) {
            sum += this.sectionArr[i];
            if (position < -(bannerHeight + sum - 100)) {
                document.getElementById('section_' + (i + 1)).style.opacity = '1';
            }
        }
    }

    animateMobile(position) {
        console.log(this.sectionArr);
        console.log(position);
        const bannerHeight = window.innerHeight;
        let sum = 0;
        for (let i = 0; i < this.sectionArr.length; i++) {
            sum += this.sectionArr[i];
            console.log(position, (bannerHeight + sum));
            if (position > sum - bannerHeight * .4) {
                document.getElementById('mob_section_' + (i + 1)).style.opacity = '1';
            }
        }
    }

    initSectionsArr() {
        if (window.innerWidth > 767) {
            const sectionCount = document.querySelectorAll('.work-dynamic-content-details').length;
            for (let i = 0; i < sectionCount; i++) {
                this.sectionArr.push(document.getElementById('section_' + (i + 1)).offsetHeight);
            }
        } else {
            const sectionCount = document.querySelectorAll('.mobile-components').length;
            for (let i = 0; i < sectionCount; i++) {
                this.sectionArr.push(document.getElementById('mob_section_' + (i + 1)).offsetHeight);
            }
        }
    }

    ngOnDestroy(): void {
        this.done = false;
        this.sectionArr = [];
        this.actionsService.workOpened.next(false);
        this.actionsService.workScrollPosition.next(-window.innerHeight + 100);
        this.windowSubscription.unsubscribe();
        this.positionSubscription.unsubscribe();
    }
}
