import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {WorkService} from '../../../../_services/work.service';
import {ActivatedRoute} from '@angular/router';
import {Work} from '../../../../_models/work/work';
import {AppGlobals} from '../../../../app.globals';

@Component({
    selector: 'app-work-detail',
    templateUrl: './work-detail.component.html',
    styleUrls: ['./work-detail.component.scss']
})
export class WorkDetailComponent implements OnInit, OnDestroy {
    id: number;
    work: Work;
    imgPath;
    done = false;
    private routeSubscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private service: WorkService,
        config: AppGlobals
    ) {
        if (service.work) {
            this.work = this.service.work;
            this.done = true;
        }
        this.imgPath = config.imageUrl + '/portfolio/';

    }

    ngOnInit() {
        this.routeSubscription = this.route.params.subscribe(params => {
            this.id = params.id;

            this.service.getOne(this.id).subscribe(
                data => {
                    this.work = data;
                    console.log(this.work);
                    this.done = true;
                },
                err => console.log(err)
            );
        });
    }

    ngOnDestroy(): void {
        this.done = false;
    }
}
