import {Component, Input, OnInit} from '@angular/core';
import {WorkDetails} from '../../../../../_models/work/WorkDetails';
import {AppGlobals} from '../../../../../app.globals';

@Component({
    selector: 'app-work-video',
    templateUrl: './work-video.component.html',
    styleUrls: ['./work-video.component.scss']
})
export class WorkVideoComponent implements OnInit {

    videoUrl: string;

    @Input() content: WorkDetails;

    constructor(private config: AppGlobals) {
        this.videoUrl = config.imageUrl;
    }

    ngOnInit() {
    }

}
