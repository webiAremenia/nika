import {Component, OnInit} from '@angular/core';
import {WorkService} from '../../../_services/work.service';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

    works: any[];

    constructor(private workService: WorkService) {
    }

    ngOnInit() {
        this.getAllWorks();
    }

    getAllWorks() {
        this.works = this.workService.getWorks();
        console.log(this.works);
    }
}

