import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {WorkDetails} from '../../../../../_models/work/WorkDetails';
import {AppGlobals} from '../../../../../app.globals';

@Component({
    selector: 'app-work-video',
    templateUrl: './work-video.component.html',
    styleUrls: ['./work-video.component.scss']
})
export class WorkVideoComponent implements OnInit {
    @ViewChild(`videoElement`) videoElement: ElementRef;
    @ViewChild(`videoLogo`) videoLogo: ElementRef;

    videoUrl: string;
    play = false;

    @Input() content: WorkDetails;

    constructor(private config: AppGlobals) {
        this.videoUrl = config.imageUrl;
    }

    ngOnInit() {
    }

    toggleVideoPlay() {
        this.play = !this.play;
        this.play ? this.videoElement.nativeElement.play() : this.videoElement.nativeElement.pause();
        this.videoLogo.nativeElement.style.display = this.play ? 'none' : 'block';
    }

}
