import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {WorkService} from '../../../shared/services/work.service';
import {FormArray} from '@angular/forms';
import {NzModalService} from 'ng-zorro-antd';
import {AppGlobals} from '../../../app.globals';

@Component({
    selector: 'app-work-list',
    templateUrl: './work-list.component.html',
    styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit {
    works: any;
    url;
    done = false;

    constructor(
        private router: Router,
        private workService: WorkService,
        private modalService: NzModalService,
        globals: AppGlobals
    ) {
        this.url = globals.imageUrl;
    }

    ngOnInit() {


        this.workService.getWorks().subscribe(data => {
            this.works = data;
            console.log(data);
            this.done = true;

        }, e => {
            console.log(e);
        });
    }


    addWork() {
        this.workService.candidateWork = null;
        this.router.navigate(['works/editWork']).then();
    }


    removeVideo(work): void {
        this.modalService.confirm({
            nzTitle: 'Are you sure delete this portfolio ?',
            nzOkText: 'Yes',
            nzOkType: 'danger',
            nzOnOk: () => {
                this.workService.deleteWork(work).subscribe(data => {
                    this.works = this.works.filter(w => {
                        return w._id !== work._id;
                    });
                }, e => console.log(e));
            },
            nzCancelText: 'No',
            nzOnCancel: () => console.log('Cancel')
        });
    }

    edit(work) {
        this.workService.candidateWork = work;
        this.router.navigate(['works/editWork']).then();


    }

}
