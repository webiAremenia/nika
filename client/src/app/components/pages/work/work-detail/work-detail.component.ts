import {Component, Inject, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {WorkService} from '../../../../_services/work.service';
import {ActivatedRoute} from '@angular/router';
import {DOCUMENT} from '@angular/platform-browser';
import {Work} from '../../../../_models/work';

@Component({
    selector: 'app-work-detail',
    templateUrl: './work-detail.component.html',
    styleUrls: ['./work-detail.component.scss']
})
export class WorkDetailComponent implements OnInit {

    id: number;
    work: Work;
    imgPath = '../../../../assets/images/';
    private routeSubscription: Subscription;

    constructor(
        @Inject(DOCUMENT) private document: Document, private route: ActivatedRoute, private service: WorkService
    ) {

    }

    ngOnInit() {
        this.routeSubscription = this.route.params.subscribe(params => {
            this.id = params.id;
            this.work = this.service.getById(this.id);
            console.log(this.work);
        });
    }

}
