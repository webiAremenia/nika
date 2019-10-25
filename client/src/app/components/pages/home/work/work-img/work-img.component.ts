import {Component, Input, OnInit} from '@angular/core';
import {WorkDetails} from '../../../../../_models/work/WorkDetails';

@Component({
    selector: 'app-work-img',
    templateUrl: './work-img.component.html',
    styleUrls: ['./work-img.component.scss']
})
export class WorkImgComponent implements OnInit {

    @Input() content: WorkDetails;

    constructor() {
    }

    ngOnInit() {
    }

}
