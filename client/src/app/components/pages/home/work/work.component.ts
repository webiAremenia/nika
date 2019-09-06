import {Component, OnDestroy, OnInit} from '@angular/core';
import {WorkService} from '../../../../_services/work.service';
import {Work} from '../../../../_models/work';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, OnDestroy {

    work: Work;
    slug;

    constructor(
        private workService: WorkService,
        private activatedRoute: ActivatedRoute
    ) {
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
            this.work = this.workService.works.filter(w => w.id === this.slug)[0];
            this.workService.current = this.work;
        }
    }
    ngOnDestroy(): void {
        // console.log('work destroy');
    }
}
